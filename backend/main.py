import threading
import pyrtma
import time
import os
import climber_message as md
import climber_core_utilities.load_config as load_config
import climber_core_utilities.path_tools as path_tools
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import Response, FileResponse
from backend.survey3d import Survey, Mesh
from backend.survey_manager import SurveyManager
from pathlib import Path
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    pass # TODO
    yield
    pass # TODO

# The path we pull our configs from
CONFIG_PATH = r"./config/"
DATA_PATH = r"../data/"
DIST_PATH = r"../frontend/dist/"

# Get system config
SYS_CONFIG = load_config.system()

# The app we are serving
app = FastAPI(lifespan=lifespan)

# The survey manager
manager = SurveyManager(CONFIG_PATH, DATA_PATH)

# Mount files
app.mount("/assets", StaticFiles(directory=DIST_PATH + r"/assets", html=True))
app.mount("/images", StaticFiles(directory=DIST_PATH + r"/images", html=True))
app.mount("/3dmodels", StaticFiles(directory=DIST_PATH + r"/3dmodels", html=True))

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
                if isinstance(manager.survey, Survey):
                    if manager.survey.startTime == data["survey"]["startTime"]:
                        manager.survey.fromDict(data["survey"])
                    else:
                        print("Cannot update survey with mismatched start time")
                else:
                    print("Cannot update when there is no survey in manager!")
            # If participant requests to submit the survey, update the survey
            # then attempt to save to .json
            elif data["type"] == "submit":
                if isinstance(manager.survey, Survey):
                    print("Saving survey...")
                    if manager.survey.startTime == data["survey"]["startTime"]:
                        manager.survey.fromDict(data["survey"])
                        rtmaMsgs = manager.survey.toRTMAMessages()
                        result = manager.saveSurvey()
                        if result:
                            for msg in rtmaMsgs:
                                client.send_message(msg)
                            client.info("Survey messages sent over RTMA!")
                            for mesh in data["meshes"]:
                                obj = Mesh()
                                obj.fromDict(data["meshes"][mesh])
                                obj.saveMesh(manager.data_path)
                    else:
                        print("Cannot save survey with mismatched start time")
                        result = False
                    msg = {
                        "type" : "submitResponse",
                        "success" : result
                    } 
                    await websocket.send_json(msg)
                else:
                    print("Cannot submit when there is no survey in manager")
            elif data["type"] == "restim":
                if isinstance(manager.survey, Survey):
                    if client.connected:
                        client.send_signal(md.MT_SENSORY_TRIAL_DISCARD)
                    else:
                        print("Cannot restim; RTMA client is disconnected")
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