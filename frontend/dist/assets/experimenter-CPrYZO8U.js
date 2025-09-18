import { S as SurveyViewport, C as Color, a as CameraController, b as SurveyTable, o as openSidebarTab, p as placeUI, u as uiPositions, V as Vector3, d as Survey, e as SurveyManager } from "./common-COiwA0ea.js";
/* empty css                      */
var viewport;
var cameraController;
var surveyManager;
var surveyTable;
var updateSurveyInterval;
var lastClickedView = null;
const socketURL = "/experimenter-ws";
var socket;
function socketConnect() {
  socket = new WebSocket(socketURL);
  socket.onopen = function() {
    console.log("Socket connected!");
    socket.send(JSON.stringify({ "type": "requestConfig" }));
    if (!updateSurveyInterval) {
      updateSurveyInterval = setInterval(function() {
        const msg = { type: "requestSurvey" };
        socket.send(JSON.stringify(msg));
      }, 1e3);
    }
  };
  socket.onmessage = function(event) {
    const msg = JSON.parse(event.data);
    switch (msg.type) {
      case "survey":
        surveyManager.survey = new Survey();
        surveyManager.survey.fromJSON(msg.survey);
        surveyTable.update(surveyManager.survey, lastClickedView);
        if (lastClickedView === null) {
          const eyeButtons = document.getElementsByClassName("eyeButton");
          if (eyeButtons[0]) {
            eyeButtons[0].dispatchEvent(new Event("pointerup"));
          }
        }
        openSidebarTab("currentSurveyTab");
        break;
      case "config":
        const dropdown = document.getElementById("participantSelect");
        dropdown.innerHTML = "";
        for (var p in msg.config) {
          const newOption = document.createElement("option");
          newOption.innerHTML = p;
          newOption.value = p;
          dropdown.appendChild(newOption);
        }
        break;
      case "noSurvey":
        surveyManager.clearSurvey();
        surveyTable.clear();
        viewport.unloadCurrentMesh();
        lastClickedView = null;
        openSidebarTab("newSurveyTab");
        break;
    }
  };
  socket.onclose = function() {
    console.log(
      "Connection to websocket @ ",
      socketURL,
      " closed. Attempting reconnect in 1 second."
    );
    clearInterval(updateSurveyInterval);
    setTimeout(function() {
      socketConnect();
    }, 1e3);
  };
  socket.onerror = function(error) {
    console.error("Websocket error: ", error.message);
    socket.close();
  };
}
function newSurveyCallback() {
  const dropdown = document.getElementById("participantSelect");
  const msg = {
    type: "start",
    subject: dropdown.value
  };
  socket.send(JSON.stringify(msg));
}
function viewFieldCallback(field) {
  if (field.model) {
    if (viewport.replaceCurrentMesh(
      surveyManager.survey.config.models[field.model]["file"],
      field.vertices,
      new Color("#abcabc")
    )) {
      cameraController.reset();
    }
  }
  if (field.hotSpot.x) {
    viewport.orbMesh.position.copy(
      new Vector3(
        field.hotSpot.x,
        field.hotSpot.y,
        field.hotSpot.z
      )
    );
    viewport.orbMesh.visible = true;
  } else {
    viewport.orbMesh.position.copy(new Vector3(0, 0, 0));
    viewport.orbMesh.visible = false;
  }
  surveyManager.currentField = field;
  lastClickedView = surveyManager.survey.projectedFields.indexOf(field);
}
window.onload = function() {
  viewport = new SurveyViewport(
    document.getElementById("3dContainer"),
    new Color(16777215),
    new Color(5460819),
    20
  );
  cameraController = new CameraController(
    viewport.controls,
    viewport.renderer.domElement,
    2,
    20,
    document.getElementById("cameraControlContainer")
  );
  cameraController.createZoomSlider();
  cameraController.createCameraReset();
  surveyManager = new SurveyManager();
  surveyTable = new SurveyTable(
    document.getElementById("fieldListParent"),
    false,
    viewFieldCallback,
    null,
    null,
    null
  );
  socketConnect();
  openSidebarTab("newSurveyTab");
  placeUI(uiPositions.LEFT, uiPositions.TOP);
  const newSurvey = document.getElementById("newSurvey");
  newSurvey.onpointerup = newSurveyCallback;
  viewport.animate();
};
