from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import Response, FileResponse
from survey3d import Survey, Mesh
from survey_manager_climber import SurveyManagerClimber
from pathlib import Path
import threading
import logging
import pyrtma
import time
import os
import climber_message as md
import climber_core_utilities.load_config as load_config
import climber_core_utilities.path_tools as path_tools
from contextlib import asynccontextmanager
from rich.logging import RichHandler

# The path we pull our configs from
CONFIG_PATH = r"./config/"
DIST_PATH = r"../frontend/dist/"

# Get system config
SYS_CONFIG = load_config.system()

# The survey manager
manager = SurveyManagerClimber(CONFIG_PATH)

def setup_logger():
    log = logging.getLogger("uvicorn")
    log.handlers = []
    handler = RichHandler(rich_tracebacks=True, log_time_format="[%X.%f]")
    handler.setFormatter(logging.Formatter("[uvicorn]   %(message)s"))
    log.addHandler(handler)

@asynccontextmanager
async def lifespan(app: FastAPI):
    manager.startRTMAThread()
    yield
    print(f"Server shutting down")
    if manager.rtmaThread.is_alive():
        print("Stopping rtma thread")
        manager.stopRTMAThread()
    print(f"Waiting for rtma thread to close")
    manager.joinRTMAThread()
    print(f"Exiting")

# The app we are serving
app = FastAPI(lifespan=lifespan)

# Mount files
app.mount("/assets", StaticFiles(directory=DIST_PATH + r"/assets", html=True))
app.mount("/images", StaticFiles(directory=DIST_PATH + r"/images", html=True))
app.mount("/3dmodels/default", StaticFiles(directory=DIST_PATH + r"/3dmodels", html=True))
for p in load_config.participant().keys():
    dir = Path(os.getenv("CLIMBER_CONFIGS"), f"participant\\{os.getenv("CC_SITE")}\\3DScans\\{p}")
    if os.path.isdir(dir):
        app.mount(f"/3dmodels/{p}", StaticFiles(directory=dir, html=True))

@app.get("/")
def home() -> Response:
    return FileResponse(DIST_PATH + r"/index.html")

@app.get("/participant")
def participant() -> Response:
    return FileResponse(DIST_PATH + r"/participant/index.html")

@app.get("/experimenter")
def experimenter() -> Response:
    return FileResponse(DIST_PATH + r"/experimenter/index.html")

@app.websocket("/participant-ws")
async def participant_ws(websocket: WebSocket):
    """
    The websocket entry point for the participant client
    """
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_json()
            # If participant is waiting and a survey exists, 
            # pass along the survey
            if data["type"] == "waiting":
                if manager.survey:
                    msg = {
                        "type" : "survey",
                        "survey" : manager.survey.toDict()
                    }
                    print("Sending survey to participant...")
                    await websocket.send_json(msg)
            # If participant reports having an update, update the server's
            # representation of the survey with that data
            elif data["type"] == "update":
                manager.updateSurvey(data["survey"])
            # If participant requests to submit the survey, update the survey
            # then attempt to save to .json
            elif data["type"] == "submit":
                manager.updateSurvey(data["survey"])
                manager.sendSurveyRTMA()
                result = manager.saveSurvey()
                result &= manager.saveMeshData(data["meshes"])
                msg = {
                    "type" : "submitResponse",
                    "success" : result
                } 
                await websocket.send_json(msg)
                print("Survey complete!")
            elif data["type"] == "restim":
                if isinstance(manager.survey, Survey):
                    manager.restim()
                else:
                    print("Cannot restim without ongoing survey")
            else:
                raise ValueError("Bad type value in participant-ws: " 
                                 + f"{data['type']}")
    except WebSocketDisconnect:
        print("Participant disconnected")

@app.websocket("/experimenter-ws")
async def experimenter_ws(websocket: WebSocket):
    """
    The websocket entry point for the experimenter client
    """
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_json()
            # Start a new survey for a given participant
            if data["type"] == "start":
                if manager.newSurvey(data["subject"]):
                    print(f"Starting survey for {data['subject']}.")
                else:
                    print(f"Cannot start survey for {data['subject']}!")
            # Return to the experimenter a dictionary with all survey data, 
            # to be viewed by the experimenter client
            elif data["type"] == "requestSurvey":
                if manager.survey != None:
                    msg = {
                        "type" : "survey",
                        "survey" : manager.survey.toDict()
                    }
                    await websocket.send_json(msg)
                else:
                    msg = {
                        "type" : "noSurvey"
                    }
                    await websocket.send_json(msg)
            # Return to the experimenter the current participant config
            elif data["type"] == "requestConfig":
                msg = {
                    "type" : "config",
                    "config" : manager.config
                }
                await websocket.send_json(msg)
            else:
                raise ValueError(f"Bad type value in experimenter-ws: " 
                                 + f"{data['type']}")
    except WebSocketDisconnect:
        print("Experimenter disconnected")

    @app.get("/favicon.ico")
    async def favicon():
        return FileResponse(DIST_PATH + r"/favicon.ico")
