const root = document.getElementsByTagName("body").item(0);
let isRunning = false;
let isPaused = false;

// Initialize main element
function initialize() {
  root.style.position = "absolute";
  root.style.margin = "0px";
  root.style.width = "100vw";
  root.style.height = "100vh";
  root.style.left = "50%";
  root.style.transform = "translateX(-50%)";
  createControls();
}

initialize();

// Add animation controls
function createControls() {
  let nav = document.createElement("nav");
  nav.id = "controls";
  nav.style.position = "relative";
  nav.style.zIndex = 1000;
  nav.style.textAlign = "center";
  nav.style.backgroundColor = "darkgray";
  nav.style.width = "fit-content";
  nav.style.left = "50%";
  nav.style.transform = "translateX(-50%)";
  nav.style.borderRadius = "0px 0px 10px 10px";
  nav.style.padding = "10px 40px 10px 40px";
  let startButton = document.createElement("button");
  startButton.style.margin = "4px";
  startButton.innerHTML = "Start";
  startButton.addEventListener("click", startAnimation);
  nav.append(startButton);
  let stopButton = document.createElement("button");
  stopButton.style.margin = "4px";
  stopButton.innerHTML = "Stop"
  stopButton.addEventListener("click", stopAnimation);
  nav.append(stopButton);
  let resetButton = document.createElement("button");
  resetButton.style.margin = "4px";
  resetButton.innerHTML = "Reset";
  resetButton.addEventListener("click", resetAnimation);
  nav.append(resetButton);
  nav.style.visibility = "hidden";
  root.append(nav);
}

function hideControls() {
  let nav = document.getElementById("controls");
  nav.style.visibility = "hidden";
}

function showControls() {
  let nav = document.getElementById("controls");
  nav.style.visibility = "visible";
}


/* ************* Element Creation and Removal ********************* */
function createElement(type, id = "", x = 0, y = 0) {
  let e = document.createElement(type);
  e.style.position = "absolute";
  e.style.width = "fit-content";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.id = id;
  root.append(e);
  return e;
}

function createImg(url, id = "", x = 0, y = 0) {
  let e = document.createElement("img");
  e.src = url;
  e.style.position = "absolute";
  e.style.width = "fit-content";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.id = id;
  root.append(e);
  return e;
}

function createTextBox(id, x = 0, y = 0) {
  let e = document.createElement("input");
  e.type = "text";
  e.style.position = "absolute";
  e.style.width = "fit-content";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.id = id;
  root.append(e);
  return e;
}

function createButton(id, text = "button", x = 0, y = 0) {
  let e = document.createElement("button");
  e.innerHTML = text;
  e.style.position = "absolute";
  e.style.width = "fit-content";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.id = id;
  root.append(e);
  return e;
}

function createCheckBox(id, x = 0, y = 0) {
  let e = document.createElement("input");
  e.type = "checkbox";
  e.style.position = "absolute";
  e.style.width = "fit-content";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.id = id;
  root.append(e);
  return e;
}

function createRadioButton(id, group, x = 0, y = 0) {
  let e = document.createElement("input");
  e.type = "radio";
  e.name = group;
  e.style.position = "absolute";
  e.style.width = "fit-content";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.id = id;
  root.append(e);
  return e;
}

function createRect(x, y, w, h, color = "inherit", id = "") {
  let e = document.createElement("div");
  e.style.position = "absolute";
  e.style.width = w + "px";
  e.style.height = h + "px";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.style.backgroundColor = color;
  e.id = id;
  root.append(e);
  return e;
}

function createCircle(x, y, r, color = "inherit", id = "") {
  let e = document.createElement("div");
  e.style.position = "absolute";
  e.style.width = 2 * r + "px";
  e.style.height = 2 * r + "px";
  e.style.borderRadius = "50%";
  e.style.transformOrigin = "top left";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.style.transform = "translate(-50%, -50%)";
  e.style.backgroundColor = color;
  e.style.display = "flex";
  e.style.flexDirection = "row";
  e.style.justifyContent = "center";
  e.style.alignItems = "center";
  e.id = id;
  e.classList.add("circle")
  root.append(e);
  return e;
}

function attach(id, parentId = "") {
  let e = document.getElementById(id);
  let parent;
  if (parentId == "") {
    parent = root;
  }
  else {
    parent = document.getElementById(parentId);
  }
  try {
    parent.appendChild(e);
  }
  catch (error) {
    console.error(error);
  }
}

function remove(id) {
  let e = document.getElementById(id);
  if (e) {
    e.remove();
    return e;
  }
  else {
    console.error(id + " doesn't exist");
  }
}

/* ************* Position and Size Functions ***************** */
function setWidth(value, id = "") {
  if (id == "") {
    root.style.width = value + "px";
    return;
  }
  let e = document.getElementById(id);
  if (e) e.style.width = value + "px";
  else console.error(id + " does not exist");
}

function getWidth(id = "") {
  if (id == "") {
    return root.offsetWidth;
  }
  let e = document.getElementById(id);
  if (e) return e.offsetWidth;
  else console.error(id + " does not exist");
}

function setHeight(value, id = "") {
  if (id == "") {
    root.style.height = value + "px";
    return;
  }
  let e = document.getElementById(id);
  if (e) e.style.height = value + "px";
  else console.error(id + " does not exist");
}

function getHeight(id = "") {
  if (id == "") {
    return root.offsetHeight;
  }
  let e = document.getElementById(id);
  if (e) return e.offsetHeight;
  else console.error(id + " does not exist");
}

function setX(value, id) {
  let e = document.getElementById(id);
  if (e) e.style.left = value + "px";
  else console.error(id + " does not exist");
}

function getX(id) {
  let e = document.getElementById(id);
  if (e) return e.offsetLeft;
  else console.error(id + " does not exist");
}

function setY(value, id) {
  let e = document.getElementById(id);
  if (e) e.style.top = value + "px";
  else console.error(id + " does not exist");
}

function getY(id) {
  let e = document.getElementById(id);
  if (e) return e.offsetTop;
  else console.error(id + " does not exist");
}

function changeXBy(value, id) {
  let e = document.getElementById(id);
  if (e) {
    e.style.left = e.offsetLeft + Number(value) + "px";
  }
  else console.error(id + " does not exist");
}

function changeYBy(value, id) {
  let e = document.getElementById(id);
  if (e) {
    ;
    e.style.top = e.offsetTop + Number(value) + "px";
  }
  else console.error(id + " does not exist");
}

function move(value, id) {
  let e = document.getElementById(id);
  if (e) {
    let deg = e.style.rotate.substring(0, e.style.rotate.indexOf("deg"));
    deg = Number(deg);
    let rad = deg * Math.PI / 180;
    e.style.left = (e.offsetLeft + Number(value) * Math.cos(rad)) + "px";
    e.style.top = (e.offsetTop + Number(value) * Math.sin(rad)) + "px";
  }
  else console.error(id + " does not exist");
}

/* ************* Rotation Functions ***************** */

function setRotation(degrees, id) {
  let e = document.getElementById(id);
  if (e) e.style.rotate = degrees + "deg";
  else console.error(id + " does not exist");
}

function getRotation(id) {
  let e = document.getElementById(id);
  if (e) {
    return stripUnits(e.style.rotate, "deg");
  }
  else console.error(id + " does not exist");
}

function rotate(degrees, id) {
  let e = document.getElementById(id);
  if (e) {
    e.style.rotate = stripUnits(e.style.rotate, "deg") + Number(degrees) + "deg";
  }
  else console.error(id + " does not exist");
}

/* ************* Navigation *********************** */
function navigateTo(url) {
  window.location.assign(url);
}

/* ************* Content and Color Functions ***************** */

function setText(value, id) {
  let e = document.getElementById(id);
  if (e) e.innerHTML = value;
  else console.error(id + " does not exist");
}

function getText(id) {
  let e = document.getElementById(id);
  if (e) return e.innerHTML;
  else console.error(id + " does not exist");
}

function setColor(color, id = "") {
  if (id == "") {
    root.style.backgroundColor = color;
    return;
  }
  let e = document.getElementById(id);
  if (e) e.style.backgroundColor = color;
  else console.error(id + " does not exist");
}

function getColor(id = "") {
  if (id == "") {
    return root.style.backgroundColor;
  }
  let e = document.getElementById(id);
  if (e) return e.style.backgroundColor;
  else console.error(id + " does not exist");
}

function setTextColor(color, id) {
  let e = document.getElementById(id);
  if (e) e.style.color = color;
  else console.error(id + " does not exist");
}

function getTextColor(id) {
  let e = document.getElementById(id);
  if (e) return e.style.color;
  else console.error(id + " does not exist");
}

function setImage(url, id) {
  let e = document.getElementById(id);
  if (e && e.tagName.toLowerCase() == "img") e.src = url;
  else console.error(id + " does not exist or is not an image element");
}

function getImage(id) {
  let e = document.getElementById(id);
  if (e && e.tagName.toLowerCase() == "img") return e.src;
  else console.error(id + " does not exist or is not an image element");
}

function show(id) {
  let e = document.getElementById(id);
  if (e) e.style.visibility = "visible";
  else console.error(id + " does not exist");
}

function showAll() {
  const elements = getVisibleElements();
  for (e of elements) {
    e.style.visibility = "visible";
  }
}

function hide(id) {
  let e = document.getElementById(id);
  if (e) e.style.visibility = "hidden";
  else console.error(id + " does not exist");
}

function hideAll() {
  const elements = getVisibleElements();
  for (e of elements) {
    e.style.visibility = "hidden";
  }
}

function isVisible(id) {
  let e = document.getElementById(id);
  if (e) return e.style.visibility != "hidden" && e.style.visibility != "collapse";
  else console.error(id + " does not exist");
}

function setStyle(property, value, id) {
  let e = document.getElementById(id);
  if (e) {
    e.style[getCamelCaseProp(property)] = value;
  }
  else console.error(id + " does not exist");
}

function getStyle(property, id) {
  let e = document.getElementById(id);
  if (e) {
    return e.style[getCamelCaseProp(property)];
  }
  else console.error(id + " does not exist");
}

/* ************ Sound ************************** */
function playSound(url) {
  let sound = new Audio(url);
  sound.play();
}

/* ************ Forms Helpers ****************** */

function getInputValue(id) {
  let e = document.getElementById(id);
  if (e) {
    if (e.tagName.toLocaleLowerCase() == "input" || e.tagName.toLocaleLowerCase() == "button") {
      if (e.value)
        return e.value;
      else console.log(id + " does not have an input value");
    }
    else console.error(id + " is not an element that has an input value");
  }
  else console.error(id + " does not exist");
}

function setInputValue(val, id) {
  let e = document.getElementById(id);
  if (e) {
    if (e.tagName.toLocaleLowerCase() == "input" || e.tagName.toLocaleLowerCase() == "button") {
      e.value = val;
    }
    else console.error(id + " is not an element that has an input value");
  }
  else console.error(id + " does not exist");
}

function clearInputValue(id) {
  setInputValue("", id);
}

function isChecked(id) {
  let e = document.getElementById(id);
  try {
    if (e.type == "checkbox" || e.type == "radio") {
      return e.checked;
    }
    else {
      console.error(id + " is not a checkbox or radio button");
      return false;
    }
  }
  catch (error) {
    console.error(error);
    console.error(id + " is not a checkbox or radio button");
    return false;
  }
}

/* ************ Event Helpers ****************** */

function addClickEvent(id, f) {
  let e = document.getElementById(id);
  if (e) e.addEventListener("click", f);
  else console.error(id + " does not exist");
}

function removeClickEvent(id, f) {
  let e = document.getElementById(id);
  try {
    e.removeEventListener("click", f);
  }
  catch (error) {
    console.error(error);
  }
}

function addKeyDownEvent(f) {
  addEventListener("keydown", f);
}

function onEvent(type, id, f) {
  let e = document.getElementById(id);
  try {
    e.addEventListener(type, f);
  }
  catch (error) {
    console.error(error);
  }
}

function addEventListener(type, f, id = "") {
  if (id != "") {
    try {
      let e = document.getElementById(id);
      e.addEventListener(type, f);
    }
    catch (error) {
      console.error(error);
    }
  }
  else {
    document.addEventListener(type, f);
  }
}

function isTouching(id1, id2) {
  let e1 = document.getElementById(id1);
  let e2 = document.getElementById(id2);
  if (!e1) {
    console.error(id1 + " does not exist");
    return false;
  }
  if (!e2) {
    console.error(id2 + " does not exist");
    return false;
  }

  if (e1.style.visibility != "hidden" && e2.style.visibility != "hidden") {
    let rect1 = e1.getBoundingClientRect();
    let rect2 = e2.getBoundingClientRect();
    return rect1.right > rect2.left && rect1.left < rect2.right && rect1.bottom > rect2.top && rect1.top < rect2.bottom;
  }
  else {
    return false;
  }
}

/* *************** Animation ******************* */
let lastTime = 0;

function startAnimation() {
  if (typeof (mainLoop) == 'undefined') {
    isRunning = false;
    console.error("You must define a mainLoop() function");
    return;
  }
  else if (!isRunning) {
    isRunning = true;
    isPaused = false;
    window.requestAnimationFrame(step);
  }
}

function stopAnimation() {
  isRunning = false;
}

function resetAnimation() {
  try {
    stopAnimation();
    reset();
  } catch (error) {
    console.error(error);
    console.warn("You should define a reset() function to perform steps to reset the animation");
  }
}

function step(timeStamp) {
  mainLoop(timeStamp);
  if (isRunning) window.requestAnimationFrame(step)
}

/* *************** Random Numbers ************** */
function getRandomInt(from, to) {
  let range = Math.abs(to - from);
  return Math.floor(Math.random() * (range + 1)) + from;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

/* *************** Utility ********************* */

function stripUnits(value, unit) {
  return Number(value.substring(0, value.indexOf(unit)));
}

function getCamelCaseProp(property) {
  let actualProp = property.toLowerCase();
  if (property.indexOf("-") > -1) {
    let temp = actualProp.split("-");
    actualProp = temp[0];
    for (let i = 1; i < temp.length; i++) {
      actualProp += temp[i].substring(0, 1).toUpperCase() + temp[i].substring(1);
    }
  }
  return actualProp;
}

function getVisibleElements() {
  let elements = [];
  let count = root.childNodes.length;
  for (let i = 0; i < count; i++) {
    const e = root.childNodes[i];
    if (e.nodeType == 1 && e.tagName.toLowerCase() != "script" && e.id != "controls") {
      elements.push(e);
    }
  }
  return elements;
}

/* **************** Reference Link ************* */
console.info("DOM Helper by Nathan Adams\nSee full documentation https://www.pueblocs.org/domhelper");