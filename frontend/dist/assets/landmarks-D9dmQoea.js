var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { M as MeshStandardMaterial, S as SurveyViewport, g as orbMaterial, C as Color, a as CameraController, o as openSidebarTab, p as placeUI, u as uiPositions, c as activatePaletteButton, h as highlightText, L as Landmark, i as LandmarkSet, d as openAlert } from "./common-Dp82JwJb.js";
/* empty css                      */
const selectedOrbMaterial = new MeshStandardMaterial({
  color: 4255155,
  roughness: 0.75,
  metalness: 0,
  transparent: true,
  opacity: 0.5,
  premultipliedAlpha: true,
  emissive: 4255155,
  emissiveIntensity: 0.5
});
class LandmarkViewport extends SurveyViewport {
  /**
   * Constructor for a LandmarkViewport object
   * @param {Element} parentElement - the element you want to parent the 
   *      viewport
   * @param {THREE.Color} backgroundColor - the color of the 3D environment's
   *      background
   * @param {THREE.Color} defaultColor - the default color of the mesh
   * @param {number} eventQueueLength - the length of the event queue
   * @param {function} newOrbPlaceCallback - the function to be called after a
   *      new orb is placed
   */
  constructor(parentElement, backgroundColor, defaultColor, eventQueueLength, newOrbPlaceCallback, makeOrbCurrentCallback, makeOrbTempCurrentCallback, clearOrbTempCurrentCallback) {
    super(
      parentElement,
      backgroundColor,
      defaultColor,
      eventQueueLength
    );
    this.orbs = [];
    this.currentOrb = null;
    this.tempCurrentOrb = null;
    this.placeMode = false;
    this.orbHeld = false;
    this.newOrbPlaceCallback = newOrbPlaceCallback;
    this.makeOrbCurrentCallback = makeOrbCurrentCallback;
    this.makeOrbTempCurrentCallback = makeOrbTempCurrentCallback;
    this.clearOrbTempCurrentCallback = clearOrbTempCurrentCallback;
  }
  get currentOrb() {
    return this._currentOrb;
  }
  set currentOrb(value) {
    if (this._currentOrb != null) {
      this._currentOrb.material = orbMaterial;
    }
    this._currentOrb = value;
    if (this._currentOrb != null) {
      this._currentOrb.material = selectedOrbMaterial;
    }
  }
  get tempCurrentOrb() {
    return this._tempCurrentOrb;
  }
  set tempCurrentOrb(value) {
    if (value == this.currentOrb && value != null) {
      this._tempCurrentOrb = null;
      this.currentOrb.material = selectedOrbMaterial;
      return;
    } else if (value == null) {
      if (this._tempCurrentOrb != null) {
        this._tempCurrentOrb.material = orbMaterial;
      }
      if (this.currentOrb != null) {
        this.currentOrb.material = selectedOrbMaterial;
      }
    } else {
      if (this._tempCurrentOrb != null) {
        this._tempCurrentOrb.material = orbMaterial;
      }
      if (this.currentOrb != null) {
        this.currentOrb.material = orbMaterial;
      }
      value.material = selectedOrbMaterial;
    }
    this._tempCurrentOrb = value;
  }
  /**
   * Create a new orb at the given position, and make it the current orb
   * @param {number} x - the x coordinate at which the new orb will be placed
   * @param {number} y - the y coordinate at which the new orb will be placed
   * @param {number} z - the z coordinate at which the new orb will be placed
   */
  placeOrbAtPosition(x, y, z) {
    const newOrb = this.orbMesh.clone();
    this.scene.add(newOrb);
    this.orbs.push(newOrb);
    newOrb.position.set(x, y, z);
    newOrb.visible = true;
    this.currentOrb = newOrb;
  }
  /**
   * Clear all orbs from the viewport and list
   */
  resetOrbs() {
    for (let i = 0; i < this.orbs.length; i++) {
      this.orbs[i].removeFromParent();
    }
    this.orbs = [];
  }
  /**
   * Look through the stored list of orbs until a match for the given orb is
   * found, then return the index of the given orb
   * @param {THREE.Object} orb - the orb whose index will be returned, if 
   *      found in the list
   * @returns {number}
   */
  getIndexOfOrb(orb) {
    var index = -1;
    for (let i = 0; i < this.orbs.length; i++) {
      if (orb == this.orbs[i]) {
        index = i;
        break;
      }
    }
    return index;
  }
  onPointerUp(event) {
    super.onPointerUp(event);
    if (this.orbHeld) {
      this.orbHeld = false;
    }
  }
  doMeshUpdateForControlState(controlState) {
    if (controlState == this.constructor.controlStates.ORB_PLACE) {
      this.brushMesh.visible = true;
      if (this.pointerDownViewport) {
        this.raycaster.setFromCamera(this.pointer, this.camera);
        const res = this.raycaster.intersectObject(
          this.currentMesh,
          true
        );
        if (res.length) {
          if (this.placeMode && !this.orbHeld) {
            this.currentOrb = this.orbMesh.clone();
            this.scene.add(this.currentOrb);
            this.orbs.push(this.currentOrb);
            this.newOrbPlaceCallback();
          }
          this.orbHeld = true;
          this.currentOrb.position.copy(res[0].point);
          this.currentOrb.visible = true;
        }
      }
    } else if (controlState == this.constructor.controlStates.SELECT) {
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const res = this.raycaster.intersectObjects(
        this.orbs,
        true
      );
      if (res.length) {
        var index = this.getIndexOfOrb(res[0].object);
        if (this.pointerDownViewport) {
          this.currentOrb = res[0].object;
          this.makeOrbCurrentCallback(index);
        } else {
          this.clearOrbTempCurrentCallback();
          this.tempCurrentOrb = res[0].object;
          this.makeOrbTempCurrentCallback(index);
        }
      } else {
        if (this.tempCurrentOrb) {
          this.tempCurrentOrb = null;
          this.clearOrbTempCurrentCallback();
        }
      }
    } else {
      super.doMeshUpdateForControlState(controlState);
    }
  }
  toOrbit() {
    super.toOrbit();
    this.placeMode = false;
  }
  toPan() {
    super.toPan();
    this.placeMode = false;
  }
  toOrbPlace() {
    super.toOrbPlace();
    this.placeMode = true;
  }
  toOrbMove() {
    super.toOrbPlace();
    this.placeMode = false;
  }
  /**
   * Updates the controlState object to the SELECT state.
   */
  toSelect() {
    this.controlState = this.constructor.controlStates.SELECT;
    this.controls.enabled = false;
    this.placeMode = false;
  }
}
__publicField(LandmarkViewport, "controlStates", {
  ORBIT: 0,
  PAN: 1,
  PAINT: 2,
  ERASE: 3,
  ORB_PLACE: 4,
  SELECT: 5
});
var viewport;
var cameraController;
var landmarkSet = null;
var landmarkInputs = [];
class LandmarkInputs {
  constructor(label, deleteButton, moveButton) {
    this.label = label;
    this.deleteButton = deleteButton;
    this.moveButton = moveButton;
  }
}
function startLandmarksCallback() {
  const initNameInput = document.getElementById("initNameInput");
  const name = initNameInput.value;
  const modelSelect = document.getElementById("modelSelect");
  startLandmarkSet(name, modelSelect.value);
}
function loadFromFileCallback() {
  const fileInput = document.getElementById("landmarkFileInput");
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    var data = JSON.parse(e.target.result);
    var landmarks = [];
    for (let i = 0; i < data.landmarks.length; i++) {
      var landmark = new Landmark();
      landmark.fromJSON(data.landmarks[i]);
      landmarks.push(landmark);
    }
    startLandmarkSet(
      "",
      data.mesh.filename,
      landmarks
    );
  };
  reader.readAsText(file);
}
async function populateModelDropdown() {
  const modelSelect = document.getElementById("modelSelect");
  modelSelect.innerHTML = "";
  const response = await fetch("/all-mesh-filenames");
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const result = await response.json();
  for (var fn in result.filenames) {
    const newOption = document.createElement("option");
    newOption.innerHTML = result.filenames[fn];
    newOption.value = result.filenames[fn];
    modelSelect.appendChild(newOption);
  }
}
async function startLandmarkSet(name, model, landmarks = []) {
  await viewport.replaceCurrentMesh(model);
  landmarkSet = new LandmarkSet(
    name,
    viewport.getMeshParameters(viewport.currentMesh, model),
    landmarks
  );
  const nameInput = document.getElementById("nameInput");
  nameInput.value = name;
  const modelSelect = document.getElementById("modelSelect");
  modelSelect.value = model;
  viewport.resetOrbs();
  updateOrbsFromLandmarks(landmarkSet.landmarks);
  updateLandmarkList();
  openSidebarTab("editTab");
}
function updateOrbsFromLandmarks(landmarks) {
  for (var i = 0; i < landmarks.length; i++) {
    viewport.placeOrbAtPosition(
      landmarks[i].x,
      landmarks[i].y,
      landmarks[i].z
    );
  }
}
function updateLandmarkList() {
  const landmarkListParent = document.getElementById("landmarkListParent");
  landmarkListParent.innerHTML = "";
  landmarkListParent.appendChild(generateLandmarkList());
}
function newLandmarkInSet() {
  if (landmarkSet != null) {
    landmarkSet.landmarks.push(new Landmark());
    updateLandmarkList();
  }
}
async function saveLandmarkSet() {
  if (landmarkSet) {
    openAlert("Saving...");
    try {
      landmarkSet.validate();
    } catch (e) {
      openAlert(
        `Cannot save landmark set: ${e.message}`,
        ["Ok"],
        [function() {
          openSidebarTab("editTab");
        }]
      );
      return;
    }
    for (var i in viewport.orbs) {
      landmarkSet.landmarks[i].x = viewport.orbs[i].position.x;
      landmarkSet.landmarks[i].y = viewport.orbs[i].position.y;
      landmarkSet.landmarks[i].z = viewport.orbs[i].position.z;
    }
    try {
      const response = await fetch(
        "/save-landmark-set",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(landmarkSet.toJSON()),
          signal: AbortSignal.timeout(5e3)
        }
      );
      if (response.ok) {
        response.json().then(
          (parsed) => {
            if (parsed.result) {
              openAlert(
                "Save successful!",
                ["Ok"],
                [function() {
                  openSidebarTab("setupTab");
                }]
              );
            } else {
              openAlert(
                `Error while saving: ${parsed.error}`,
                ["Ok"],
                [function() {
                  openSidebarTab("editTab");
                }]
              );
            }
          }
        );
      } else {
        openAlert(
          "The request to save encountered an error.",
          ["Ok"],
          [function() {
            openSidebarTab("editTab");
          }]
        );
      }
    } catch {
      openAlert(
        "The request to save timed out.",
        ["Ok"],
        [function() {
          openSidebarTab("editTab");
        }]
      );
    }
  }
}
function makeLandmarkCurrent(number) {
  if (landmarkSet != null && number < viewport.orbs.length) {
    viewport.currentOrb = viewport.orbs[number];
    viewport.toOrbMove();
    activatePaletteButton(landmarkInputs[number].moveButton.id);
    highlightText(landmarkInputs[number].label);
  }
}
function makeLandmarkTempCurrent(number) {
  if (landmarkSet != null && number < viewport.orbs.length) {
    viewport.tempCurrentOrb = viewport.orbs[number];
    highlightText(landmarkInputs[number].label);
  }
}
function clearTempCurrent() {
  viewport.tempCurrentOrb = null;
  if (viewport.currentOrb != null) {
    var index = viewport.getIndexOfOrb(viewport.currentOrb);
    highlightText(landmarkInputs[index].label);
  }
}
function generateLandmarkList() {
  if (landmarkSet != null) {
    const landmarkList = document.createDocumentFragment();
    landmarkInputs = [];
    for (var i in landmarkSet.landmarks) {
      const number = i;
      const landmarkRow = document.createElement("div");
      landmarkRow.classList.add("surveyTableRow");
      const landmarkLabel = document.createElement("label");
      landmarkLabel.classList.add("smallText");
      landmarkLabel.innerHTML = `${parseInt(number) + 1}.`;
      const nameInput = document.createElement("input");
      nameInput.onchange = (function(e) {
        if (landmarkSet != null && number < landmarkSet.landmarks.length) {
          landmarkSet.landmarks[number].name = e.target.value;
        }
      }).bind(number);
      nameInput.onfocus = (function(e) {
        makeLandmarkCurrent(number);
      }).bind(number);
      nameInput.value = landmarkSet.landmarks[number].name;
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.classList.add("smallButton");
      deleteButton.onpointerup = (function(e) {
        if (landmarkSet != null && number < landmarkSet.landmarks.length && number < viewport.orbs.length) {
          if (viewport.orbs[number] == viewport.currentOrb) {
            viewport.currentOrb = null;
          }
          if (viewport.orbs[number] == viewport.tempCurrentOrb) {
            viewport.tempCurrentOrb = null;
          }
          landmarkSet.landmarks.splice(number, 1);
          viewport.orbs[number].removeFromParent();
          viewport.orbs.splice(number, 1);
          updateLandmarkList();
        }
      }).bind(number);
      deleteButton.onmouseover = (function(e) {
        makeLandmarkTempCurrent(number);
      }).bind(number);
      deleteButton.onmouseout = clearTempCurrent;
      const moveButton = document.createElement("button");
      moveButton.innerHTML = "Move";
      moveButton.id = `landmarkMoveButton${number}`;
      moveButton.classList.add("smallButton");
      moveButton.classList.add("paletteButton");
      moveButton.onpointerup = (function(e) {
        makeLandmarkCurrent(number);
      }).bind(number);
      moveButton.onmouseover = (function(e) {
        makeLandmarkTempCurrent(number);
      }).bind(number);
      moveButton.onmouseout = clearTempCurrent;
      landmarkRow.appendChild(landmarkLabel);
      landmarkRow.appendChild(nameInput);
      landmarkRow.appendChild(deleteButton);
      landmarkRow.appendChild(moveButton);
      landmarkList.appendChild(landmarkRow);
      landmarkInputs.push(
        new LandmarkInputs(
          landmarkLabel,
          deleteButton,
          moveButton
        )
      );
      if (viewport.currentOrb == viewport.orbs[number]) {
        highlightText(landmarkInputs[number].label);
      }
    }
    return landmarkList;
  }
}
window.onload = function() {
  viewport = new LandmarkViewport(
    document.getElementById("3dContainer"),
    new Color(16777215),
    new Color(5460819),
    20,
    newLandmarkInSet,
    makeLandmarkCurrent,
    makeLandmarkTempCurrent,
    clearTempCurrent
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
  populateModelDropdown();
  openSidebarTab("setupTab");
  placeUI(uiPositions.LEFT, uiPositions.TOP);
  const startLandmarksButton = document.getElementById("startLandmarksButton");
  startLandmarksButton.onpointerup = startLandmarksCallback;
  const loadFromFileButton = document.getElementById("loadFromFileButton");
  loadFromFileButton.onpointerup = loadFromFileCallback;
  const nameInput = document.getElementById("nameInput");
  nameInput.onchange = function(e) {
    if (landmarkSet != null) {
      landmarkSet.name = e.target.value;
    }
  };
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
  const placeButton = document.getElementById("placeButton");
  placeButton.onpointerup = function() {
    viewport.toOrbPlace();
    activatePaletteButton("placeButton");
  };
  const selectButton = document.getElementById("selectButton");
  selectButton.onpointerup = function() {
    viewport.toSelect();
    activatePaletteButton("selectButton");
  };
  const saveButton = document.getElementById("saveButton");
  saveButton.onpointerup = saveLandmarkSet;
  viewport.animate();
};
