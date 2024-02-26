const root = document.getElementsByTagName("body").item(0);
let isRunning = false;
let isPaused = false;

// Initialize main element
root.style.position = "absolute";
root.style.margin = "0px";
root.style.width = "100vw";
root.style.height = "100vh";
root.style.left = "50%";
root.style.transform = "translateX(-50%)";
root.style.backgroundColor = "lightgray";

// Add controls
let nav = document.createElement("nav");
nav.style.textAlign = "center";
nav.id = "controls";
let startButton = document.createElement("button");
startButton.innerHTML = "Start";
startButton.addEventListener("click", start);
nav.append(startButton);
let stopButton = document.createElement("button");
stopButton.innerHTML = "Stop"
stopButton.addEventListener("click", stop);
nav.style.visibility = "hidden";
nav.append(stopButton);
root.append(nav);

function hideControls() {
  let nav = document.getElementById("controls");
  nav.style.visibility = "hidden";
}

function showControls() {
  let nav = document.getElementById("controls");
  nav.style.visibility = "visible";
}


/* ************* Element Creation ********************* */
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

function createRect(x, y, w, h, color = "white", id = "") {
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

function createCircle(x, y, r, color = "white", id = "") {
  let e = document.createElement("div");
  e.style.position = "absolute";
  e.style.width = 2 * r + "px";
  e.style.height = 2 * r + "px";
  e.style.borderRadius = "50%";
  e.style.left = x + "px";
  e.style.top = y + "px";
  e.style.backgroundColor = color;
  e.id = id;
  root.append(e);
  return e;
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

function getInputValue(id) {
  let e = document.getElementById(id);
  if (e) {
    if (e.type == "text")
      return e.value;
    else console.error(id + " is not an element that has user input");
  }
  else console.error(id + " does not exist");
}

function setProperty(property, value, id) {
  let e = document.getElementById(id);
  if (e) {
    e.style[getCamelCaseProp(property)] = value;
  }
  else console.error(id + " does not exist");
}

function getProperty(property, id) {
  let e = document.getElementById(id);
  if (e) {
    return e.style[getCamelCaseProp(property)] = value;
  }
  else console.error(id + " does not exist");
}


/* ************ Event Helpers ****************** */

function addOnClickEvent(id, f) {
  let e = document.getElementById(id);
  if (e) e.addEventListener("click", f);
  else console.error(id + " does not exist");
}

function addKeyDownEvent(f) {
  addEventListener("keydown", f);
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

  let rect1 = e1.getBoundingClientRect();
  let rect2 = e2.getBoundingClientRect();

  return rect1.right > rect2.left && rect1.left < rect2.right && rect1.bottom > rect2.top && rect1.top < rect2.bottom;
}

/* *************** Animation ******************* */
function start() {
  if (typeof (mainLoop) == 'undefined') {
    isRunning = false;
    console.error("You must define a mainLoop() function");
  }
  isRunning = true;
  isPaused = false;
  window.requestAnimationFrame(step);
}

function stop() {
  isRunning = false;
}

function step(time) {
  mainLoop(time);
  if (isRunning) window.requestAnimationFrame(step)
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

/* **************** Reference Link ************* */
console.info("DOM Helper by Nathan Adams\nSee full documentation https://www.pueblocs.org/domhelper");