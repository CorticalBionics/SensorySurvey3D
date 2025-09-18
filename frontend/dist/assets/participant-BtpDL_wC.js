import { S as SurveyViewport, C as Color, a as CameraController, b as SurveyTable, p as placeUI, u as uiPositions, c as activatePaletteButton, o as openSidebarTab, d as Survey, V as Vector3, e as SurveyManager } from "./common-COiwA0ea.js";
/* empty css                      */
var viewport;
var surveyManager;
var surveyTable;
var cameraController;
var waitingInterval;
var submissionTimeoutInterval;
var updateServerInterval;
const socketURL = "/participant-ws";
var socket;
function socketConnect() {
  socket = new WebSocket(socketURL);
  socket.onopen = function() {
    console.log("Socket connected!");
    updateServerInterval = setInterval(function() {
      surveyManager.updateSurveyOnServer(socket);
    }, 1e3);
  };
  socket.onmessage = function(event) {
    const msg = JSON.parse(event.data);
    switch (msg.type) {
      case "survey":
        prepSurvey(msg.survey);
        break;
      case "submitResponse":
        if (msg.success) {
          surveyManager.clearSurvey();
          surveyTable.clear();
          viewport.unloadCurrentMesh();
          viewport.orbMesh.visible = false;
          processSubmissionResult(msg.success);
        } else if (submissionTimeoutInterval) {
          processSubmissionResult(msg.success);
        } else {
          alert(
            "Received submitSuccess without making a submission!"
          );
        }
        break;
    }
  };
  socket.onclose = function() {
    console.log(
      "Connection to websocket @ ",
      socketURL,
      " closed. Attempting reconnection in 1 second."
    );
    clearInterval(updateServerInterval);
    setTimeout(function() {
      socketConnect();
    }, 1e3);
  };
  socket.onerror = function(error) {
    console.error("Websocket error: ", error.message);
    socket.close();
  };
}
function toggleButtons(enabled) {
  const sidebar = document.getElementById("sidebar");
  var buttons = sidebar.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = !enabled;
    if (!enabled) {
      buttons[i].style.pointerEvents = "none";
    } else {
      buttons[i].style.pointerEvents = "auto";
    }
  }
}
function toggleUndoRedo(enabled) {
  document.getElementById("undoButton").disabled = !enabled;
  document.getElementById("redoButton").disabled = !enabled;
}
function openAlert(message, buttonNames = [], buttonFunctions = []) {
  const alertTab = document.getElementById("alertTab");
  alertTab.innerHTML = "";
  const messageParagraph = document.createElement("p");
  messageParagraph.style.textAlign = "center";
  messageParagraph.innerHTML = message;
  const buttonRow = document.createElement("div");
  for (let i = 0; i < buttonNames.length; i++) {
    const name = buttonNames[i];
    const button = document.createElement("button");
    button.innerHTML = name;
    button.onpointerup = buttonFunctions[i];
    buttonRow.appendChild(button);
  }
  alertTab.appendChild(messageParagraph);
  alertTab.appendChild(buttonRow);
  openSidebarTab("alertTab");
}
function performModelReplacement(modelName, colorVertices = null, color = null, hotSpot = null) {
  viewport.orbMesh.visible = false;
  document.getElementById("modelSelect").disabled = true;
  const preMesh = viewport.currentModelFile;
  viewport.replaceCurrentMesh(
    surveyManager.survey.config.models[modelName]["file"],
    colorVertices,
    color
  ).then(
    (function() {
      viewport.orbMesh.visible = false;
      if (preMesh != viewport.currentModelFile) {
        cameraController.destroyViewsButtons();
        cameraController.createViewsButtons(
          surveyManager.survey.config.models[modelName]["views"]
        );
        cameraController.goToView(0);
      }
      document.getElementById("modelSelect").disabled = false;
      if (hotSpot && hotSpot.x) {
        viewport.orbMesh.position.copy(
          new Vector3(
            hotSpot.x,
            hotSpot.y,
            hotSpot.z
          )
        );
        viewport.orbMesh.visible = true;
      } else {
        viewport.orbMesh.position.copy(new Vector3(0, 0, 0));
        viewport.orbMesh.visible = false;
      }
    }).bind(hotSpot)
  );
}
function openFieldEditor() {
  toggleUndoRedo(true);
  openSidebarTab("fieldTab");
}
function openQualityEditor() {
  toggleUndoRedo(false);
  viewport.toOrbit();
  openSidebarTab("qualifyTab");
}
function openList() {
  document.getElementById("orbitButton").dispatchEvent(
    new Event("pointerup")
  );
  surveyManager.survey.renameFields();
  let idx = surveyManager.survey.projectedFields.indexOf(
    surveyManager.currentField
  );
  surveyTable.update(surveyManager.survey, idx);
  toggleUndoRedo(false);
  openSidebarTab("listTab");
}
function populateSelect(selectElement, optionList) {
  selectElement.innerHTML = "";
  for (let i = 0; i < optionList.length; i++) {
    const newOption = document.createElement("option");
    newOption.innerHTML = optionList[i].charAt(0).toUpperCase() + optionList[i].slice(1);
    newOption.value = optionList[i];
    selectElement.appendChild(newOption);
  }
}
function createQualityButtons() {
  const qualityList = document.getElementById("qualityList");
  qualityList.innerHTML = "";
  for (let i = 0; i < surveyManager.survey.config.qualityTypes.length; i++) {
    const quality = surveyManager.survey.config.qualityTypes[i];
    const button = document.createElement("button");
    button.innerHTML = quality.charAt(0).toUpperCase() + quality.slice(1);
    button.value = quality;
    button.classList.add("qualityButton");
    button.addEventListener("pointerup", (event) => {
      if (!alertIfNoDepths()) {
        populateQualityEditor(
          surveyManager.currentField,
          event.target.value
        );
      }
    });
    qualityList.appendChild(button);
  }
}
function prepSurvey(survey) {
  surveyManager.survey = new Survey();
  surveyManager.survey.fromJSON(survey);
  const modelKeys = Object.keys(surveyManager.survey.config.models);
  if (modelKeys.length < 2) {
    document.getElementById("modelSelectContainer").style.display = "none";
  } else {
    document.getElementById("modelSelectContainer").style.display = "flex";
  }
  const modelSelect = document.getElementById("modelSelect");
  populateSelect(modelSelect, modelKeys);
  createQualityButtons();
  cameraController.reset();
  var reportEdge = uiPositions.LEFT;
  var controlEdge = uiPositions.TOP;
  if (surveyManager.survey.config.reportEdge == "right") {
    reportEdge = uiPositions.RIGHT;
  }
  if (surveyManager.survey.config.controlEdge == "bottom") {
    controlEdge = uiPositions.BOTTOM;
  }
  placeUI(reportEdge, controlEdge);
  if (surveyManager.survey.projectedFields.length > 0) {
    surveyTable.update(surveyManager.survey, 0);
    let field = surveyManager.survey.projectedFields[0];
    performModelReplacement(
      field.model,
      field.vertices,
      new Color("#abcabc"),
      field.hotSpot
    );
  } else {
    performModelReplacement(
      modelSelect.value,
      null,
      new Color("#abcabc")
    );
  }
  if (surveyManager.survey.config.hideScaleValues) {
    document.getElementById("intensityValue").innerHTML = "";
    document.getElementById("naturalnessValue").innerHTML = "";
    document.getElementById("painValue").innerHTML = "";
    document.getElementById("fieldIntensityValue").innerHTML = "";
  }
  const painDiv = document.getElementById("painDiv");
  if (surveyManager.survey.config.hidePainSlider) {
    painDiv.style.display = "none";
  } else {
    painDiv.style.display = "inline";
  }
  const fieldIntensityDiv = document.getElementById("fieldIntensityDiv");
  if (surveyManager.survey.config.hideFieldIntensitySlider) {
    fieldIntensityDiv.style.display = "none";
  } else {
    fieldIntensityDiv.style.display = "inline";
  }
  document.getElementById("restimButton").disabled = false;
  if (waitingInterval) {
    endWaiting();
  }
}
function populateFieldEditor(field) {
  if (field != surveyManager.currentField) {
    const modelSelect = document.getElementById("modelSelect");
    if (field.model) {
      performModelReplacement(
        modelSelect.value,
        field.vertices,
        new Color("#abcabc"),
        field.hotSpot
      );
      modelSelect.value = field.model;
    }
    const naturalnessSlider = document.getElementById("naturalnessSlider");
    if (field.naturalness >= 0) {
      naturalnessSlider.value = field.naturalness;
      naturalnessSlider.dispatchEvent(new Event("input"));
    } else {
      naturalnessSlider.value = 5;
      naturalnessSlider.dispatchEvent(new Event("input"));
      const naturalnessHidden = document.getElementById(
        "naturalnessHidden"
      );
      naturalnessHidden.value = field.naturalness;
    }
    const painSlider = document.getElementById("painSlider");
    if (field.pain >= 0) {
      painSlider.value = field.pain;
      painSlider.dispatchEvent(new Event("input"));
    } else {
      painSlider.value = 0;
      painSlider.dispatchEvent(new Event("input"));
      const painHidden = document.getElementById("painHidden");
      painHidden.value = field.pain;
    }
    const fieldIntensitySlider = document.getElementById("fieldIntensitySlider");
    if (field.intensity >= 0) {
      fieldIntensitySlider.value = field.intensity;
      fieldIntensitySlider.dispatchEvent(new Event("input"));
    } else {
      fieldIntensitySlider.value = 0;
      fieldIntensitySlider.dispatchEvent(new Event("input"));
      const fieldIntensityHidden = document.getElementById("fieldIntensityHidden");
      fieldIntensityHidden.value = field.fieldIntensitySlider;
    }
    surveyManager.currentField = field;
  }
}
function saveFieldFromEditor() {
  const vertices = viewport.getNonDefaultVertices(viewport.currentMesh);
  surveyManager.currentField.vertices = vertices;
  if (viewport.orbMesh.visible) {
    surveyManager.currentField.hotSpot = viewport.orbPosition;
  } else {
    surveyManager.currentField.hotSpot = { x: null, y: null, z: null };
  }
  const modelSelect = document.getElementById("modelSelect");
  surveyManager.currentField.model = modelSelect.value;
  const naturalnessHidden = document.getElementById("naturalnessHidden");
  surveyManager.currentField.naturalness = parseFloat(
    naturalnessHidden.value
  );
  const painHidden = document.getElementById("painHidden");
  surveyManager.currentField.pain = parseFloat(painHidden.value);
  const fieldIntensityHidden = document.getElementById("fieldIntensityHidden");
  surveyManager.currentField.intensity = parseFloat(fieldIntensityHidden.value);
}
function populateQualityEditor(field, qualityType) {
  const quality = field.findQualityOfType(qualityType);
  const qualityName = document.getElementById("qualityName");
  qualityName.innerHTML = qualityType.charAt(0).toUpperCase() + qualityType.slice(1);
  const belowSkinCheck = document.getElementById("belowSkinCheck");
  const atSkinCheck = document.getElementById("atSkinCheck");
  const aboveSkinCheck = document.getElementById("aboveSkinCheck");
  const intensitySlider = document.getElementById("intensitySlider");
  if (quality) {
    if (quality.depth.includes("belowSkin")) {
      belowSkinCheck.checked = true;
    } else {
      belowSkinCheck.checked = false;
    }
    if (quality.depth.includes("atSkin")) {
      atSkinCheck.checked = true;
    } else {
      atSkinCheck.checked = false;
    }
    if (quality.depth.includes("aboveSkin")) {
      aboveSkinCheck.checked = true;
    } else {
      aboveSkinCheck.checked = false;
    }
    if (quality.intensity >= 0) {
      intensitySlider.value = quality.intensity;
    } else {
      intensitySlider.value = 5;
    }
  } else {
    intensitySlider.value = 5;
  }
  surveyManager.currentField = field;
  surveyManager.currentQuality = quality;
  if (surveyManager.survey && !surveyManager.survey.config.hideScaleValues) {
    document.getElementById("intensityValue").innerHTML = intensitySlider.value;
  }
  const qualityButtons = document.getElementsByClassName("qualityButton");
  const qualityTypes = field.qualityTypes;
  for (let i = 0; i < qualityButtons.length; i++) {
    if (qualityButtons[i].value == qualityType) {
      qualityButtons[i].classList.add("selectedButton");
    } else {
      qualityButtons[i].classList.remove("selectedButton");
    }
    if (qualityTypes.includes(qualityButtons[i].value)) {
      qualityButtons[i].classList.add("completedButton");
    } else {
      qualityButtons[i].classList.remove("completedButton");
    }
  }
  const resetButton = document.getElementById("qualityResetButton");
  if (surveyManager.currentQuality) {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
}
function createQualityIfNone() {
  if (surveyManager.currentField && !surveyManager.currentQuality) {
    surveyManager.currentQuality = surveyManager.currentField.addQuality();
    surveyManager.currentQuality.type = document.getElementById(
      "qualityName"
    ).innerHTML.toLowerCase();
    document.getElementById("qualityResetButton").disabled = false;
    const qualityButtons = document.getElementsByClassName("qualityButton");
    for (let i = 0; i < qualityButtons.length; i++) {
      if (qualityButtons[i].value == surveyManager.currentQuality.type) {
        qualityButtons[i].classList.add("completedButton");
      }
    }
    return true;
  }
  return false;
}
function alertIfNoDepths() {
  if (surveyManager.currentQuality && !surveyManager.currentQuality.hasDepth) {
    const okFunction = function() {
      openQualityEditor();
    };
    openAlert(
      "You must select at least one depth before continuing.",
      ["Go Back"],
      [okFunction]
    );
    return true;
  }
  return false;
}
function startWaiting() {
  waitingInterval = setInterval(function() {
    if (socket.readyState == WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: "waiting" }));
    }
  }, 1e3);
  openSidebarTab("waitingTab");
}
function endWaiting() {
  waitingInterval = clearInterval(waitingInterval);
  openSidebarTab("listTab");
}
function startSubmissionTimeout() {
  var timeoutCount = 0;
  submissionTimeoutInterval = setInterval((function() {
    if (timeoutCount == 10) {
      processSubmissionResult(false);
    }
    timeoutCount += 1;
  }).bind(timeoutCount), 500);
}
function processSubmissionResult(success) {
  submissionTimeoutInterval = clearInterval(submissionTimeoutInterval);
  if (success) {
    startWaiting();
    viewport.clearMeshStorage();
    cameraController.destroyViewsButtons();
    var okFunction = function() {
      openSidebarTab("waitingTab");
    };
    openAlert(
      "Submission was successful!",
      ["Ok"],
      [okFunction]
    );
  } else {
    const toListFunction = function() {
      openSidebarTab("listTab");
    };
    openAlert(
      "Submission failed - please notify the experimenter!",
      ["Ok"],
      [toListFunction]
    );
  }
  toggleButtons(true);
}
function submitCallback() {
  toggleButtons(false);
  document.getElementById("restimButton").disabled = true;
  const surveyValidityError = surveyManager.validateSurvey();
  if (!surveyValidityError) {
    var noButton = function() {
      openList();
      toggleButtons(true);
    };
    var yesButton = function() {
      openAlert("Submitting...");
      const usedMeshes = surveyManager.survey.usedMeshFilenames;
      const storedMeshes = viewport.storedMeshNames;
      var promises = [];
      if (!usedMeshes.isSubsetOf(storedMeshes)) {
        const diff = usedMeshes.difference(storedMeshes);
        for (let key of diff) {
          promises.push(viewport.loadMeshIntoStorage(key["file"]));
        }
      }
      Promise.all(promises).then(function(values) {
        const meshParams = viewport.getStoredMeshParameters(usedMeshes);
        const meshParamsObject = { meshes: meshParams };
        if (surveyManager.submitSurveyToServer(socket, meshParamsObject)) {
          startSubmissionTimeout();
        } else {
          toggleButtons(true);
          alert("Survey submission failed -- socket is not connected!");
        }
      });
    };
    openAlert(
      "Are you sure you want to submit this survey?",
      ["No", "Yes"],
      [noButton, yesButton]
    );
  } else {
    toggleButtons(true);
    var goBackButton = function() {
      openList();
    };
    openAlert(
      `Cannot submit survey.<br><br>` + surveyValidityError,
      ["Go Back"],
      [goBackButton]
    );
  }
}
function editFieldCallback(field) {
  populateFieldEditor(field);
  openFieldEditor();
}
function viewFieldCallback(field) {
  populateFieldEditor(field);
}
function addFieldCallback() {
  surveyManager.survey.addField();
  const fields = surveyManager.survey.projectedFields;
  const newField = fields[fields.length - 1];
  const modelSelect = document.getElementById("modelSelect");
  newField.model = modelSelect.value;
  editFieldCallback(newField);
}
function fieldDoneCallback() {
  var alertMessage = "";
  const vertices = viewport.getNonDefaultVertices(viewport.currentMesh);
  if (vertices.size <= 0) {
    alertMessage = `The current projected field is missing a drawing.`;
  } else if (!viewport.orbMesh.visible) {
    alertMessage = `The current projected field is missing a hot spot.`;
  }
  if (alertMessage) {
    const goBackFunction = function() {
      openFieldEditor();
    };
    const continueFunction = function() {
      saveFieldFromEditor();
      editQualityCallback(surveyManager.currentField);
    };
    openAlert(
      alertMessage,
      ["Go Back", "Continue"],
      [goBackFunction, continueFunction]
    );
  } else {
    saveFieldFromEditor();
    editQualityCallback(surveyManager.currentField);
  }
}
function editQualityCallback(field, quality) {
  viewFieldCallback(field);
  if (quality) {
    populateQualityEditor(field, quality.type);
  } else {
    populateQualityEditor(
      field,
      surveyManager.survey.config.qualityTypes[0]
    );
  }
  openQualityEditor();
}
function qualifyDoneCallback() {
  if (!alertIfNoDepths()) {
    openList();
  }
}
function updateQualityCallback() {
  createQualityIfNone();
  const intensitySlider = document.getElementById("intensitySlider");
  surveyManager.currentQuality.intensity = parseFloat(intensitySlider.value);
  const depthSelected = document.querySelectorAll('input[name="skinLevelCheckSet"]:checked');
  surveyManager.currentQuality.depth = [];
  for (let i = 0; i < depthSelected.length; i++) {
    surveyManager.currentQuality.depth.push(depthSelected[i].value);
  }
}
function qualityResetCallback(event) {
  if (!event.target.disabled) {
    const currentQualityType = surveyManager.currentQuality.type;
    if (surveyManager.deleteCurrentQuality()) {
      populateQualityEditor(surveyManager.currentField, currentQualityType);
    }
  }
}
function cancelCallback() {
  openList();
}
function fieldDeleteCallback() {
  const deleteNoFunction = function() {
    openFieldEditor();
  };
  const deleteYesFunction = function() {
    surveyManager.survey.deleteField(surveyManager.currentField);
    surveyManager.currentField = null;
    viewport.populateColor(viewport.defaultColor, viewport.currentMesh);
    openList();
  };
  openAlert(
    "Are you sure you want to delete this projected field?",
    ["No", "Yes"],
    [deleteNoFunction, deleteYesFunction]
  );
}
function modelSelectChangeCallback() {
  const modelSelect = document.getElementById("modelSelect");
  performModelReplacement(
    modelSelect.value
  );
}
function undoCallback(event) {
  if (!event.target.disabled) {
    viewport.undo();
  }
}
function redoCallback(event) {
  if (!event.target.disabled) {
    viewport.redo();
  }
}
function restimCallback(event) {
  if (!event.target.disabled) {
    socket.send(JSON.stringify({ type: "restim" }));
  }
}
window.onload = function() {
  viewport = new SurveyViewport(
    document.getElementById("3dContainer"),
    new Color(16777215),
    new Color(4342338),
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
  surveyManager = new SurveyManager();
  surveyTable = new SurveyTable(
    document.getElementById("fieldListParent"),
    true,
    viewFieldCallback,
    editFieldCallback,
    editQualityCallback
  );
  socketConnect();
  startWaiting();
  placeUI(uiPositions.LEFT, uiPositions.TOP);
  const newFieldButton = document.getElementById("newFieldButton");
  newFieldButton.onpointerup = addFieldCallback;
  const submitButton = document.getElementById("submitButton");
  submitButton.onpointerup = submitCallback;
  const orbitButton = document.getElementById("orbitButton");
  orbitButton.onpointerup = function() {
    viewport.toOrbit();
    activatePaletteButton("orbitButton");
  };
  const panButton = document.getElementById("panButton");
  panButton.onpointerup = function() {
    viewport.toPan();
    activatePaletteButton("panButton");
  };
  const paintButton = document.getElementById("paintButton");
  paintButton.onpointerup = function() {
    viewport.toPaint();
    activatePaletteButton("paintButton");
  };
  const eraseButton = document.getElementById("eraseButton");
  eraseButton.onpointerup = function() {
    viewport.toErase();
    activatePaletteButton("eraseButton");
  };
  const hotSpotButton = document.getElementById("hotSpotButton");
  hotSpotButton.onpointerup = function() {
    viewport.toOrbPlace();
    activatePaletteButton("hotSpotButton");
  };
  const brushSizeSlider = document.getElementById("brushSizeSlider");
  brushSizeSlider.oninput = function() {
    document.getElementById("brushSizeValue").innerHTML = (brushSizeSlider.value / brushSizeSlider.max).toFixed(2);
    viewport.brushSize = brushSizeSlider.value;
  };
  brushSizeSlider.dispatchEvent(new Event("input"));
  const fieldDoneButton = document.getElementById("fieldDoneButton");
  fieldDoneButton.onpointerup = fieldDoneCallback;
  const fieldCancelButton = document.getElementById("fieldCancelButton");
  fieldCancelButton.onpointerup = cancelCallback;
  const fieldDeleteButton = document.getElementById("fieldDeleteButton");
  fieldDeleteButton.onpointerup = fieldDeleteCallback;
  const qualifyDoneButton = document.getElementById("qualifyDoneButton");
  qualifyDoneButton.onpointerup = qualifyDoneCallback;
  const qualityResetButton = document.getElementById("qualityResetButton");
  qualityResetButton.onpointerup = qualityResetCallback;
  const modelSelect = document.getElementById("modelSelect");
  modelSelect.onchange = modelSelectChangeCallback;
  const undoButton = document.getElementById("undoButton");
  undoButton.onpointerup = undoCallback;
  const redoButton = document.getElementById("redoButton");
  redoButton.onpointerup = redoCallback;
  const restimButton = document.getElementById("restimButton");
  restimButton.onpointerup = restimCallback;
  const naturalnessSlider = document.getElementById("naturalnessSlider");
  naturalnessSlider.oninput = function() {
    if (surveyManager.survey && !surveyManager.survey.config.hideScaleValues) {
      document.getElementById("naturalnessValue").innerHTML = naturalnessSlider.value;
    }
    const naturalnessHidden = document.getElementById("naturalnessHidden");
    naturalnessHidden.value = naturalnessSlider.value;
  };
  const painSlider = document.getElementById("painSlider");
  painSlider.oninput = function() {
    if (surveyManager.survey && !surveyManager.survey.config.hideScaleValues) {
      document.getElementById("painValue").innerHTML = painSlider.value;
    }
    const painHidden = document.getElementById("painHidden");
    painHidden.value = painSlider.value;
  };
  const fieldIntensitySlider = document.getElementById("fieldIntensitySlider");
  fieldIntensitySlider.oninput = function() {
    if (surveyManager.survey && !surveyManager.survey.config.hideScaleValues) {
      document.getElementById("fieldIntensityValue").innerHTML = fieldIntensitySlider.value;
    }
    const fieldIntensityHidden = document.getElementById("fieldIntensityHidden");
    fieldIntensityHidden.value = fieldIntensitySlider.value;
  };
  const intensitySlider = document.getElementById("intensitySlider");
  intensitySlider.oninput = function() {
    if (surveyManager.survey && !surveyManager.survey.config.hideScaleValues) {
      document.getElementById("intensityValue").innerHTML = intensitySlider.value;
    }
    updateQualityCallback();
  };
  const belowSkinCheck = document.getElementById("belowSkinCheck");
  belowSkinCheck.oninput = updateQualityCallback;
  const atSkinCheck = document.getElementById("atSkinCheck");
  atSkinCheck.oninput = updateQualityCallback;
  const aboveSkinCheck = document.getElementById("aboveSkinCheck");
  aboveSkinCheck.oninput = updateQualityCallback;
  toggleUndoRedo(false);
  viewport.animate();
};
