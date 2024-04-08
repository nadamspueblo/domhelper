let speed = 2;
let leftPressed = false;
let rightPressed = false;

function init() {
  showControls();
  createCircle(getWidth() / 2, getHeight() - 200, 20, "red", "ball");
  createRect(getWidth() / 2 - 100, getHeight() - 100, 200, 40, "blue", "paddle");
  setRotation(getRandomInt(-110, -70), "ball");
  addEventListener("keydown", keyDown);
  addEventListener("keyup", keyUp);
}

function mainLoop() {
  animateBall();
  animatePaddle();
  if (isTouching("ball", "paddle")) {
    let angle = getRotation("ball");
    angle = -angle;
    setRotation(angle, "ball");
  }
}

function reset() {
  setRotation(getRandomInt(-110, -70), "ball");
  setX(getWidth() / 2, "ball");
  setY(getHeight() / 2, "ball");
}

function animateBall() {
  move(speed, "ball");

  if (getX("ball") >= getWidth() - 20 || getX("ball") <= 20) {
    let angle = getRotation("ball");
    angle = (180 - angle);
    setRotation(angle, "ball");
  }
  else if (getY("ball") >= getHeight() - 20 || getY("ball") <= 20) {
    let angle = getRotation("ball");
    angle = -angle;
    setRotation(angle, "ball");
  }
}

function animatePaddle() {
  if (leftPressed) {
    changeXBy(-10, "paddle");
    if (getX("paddle") < 0){
      setX(0, "paddle");
    }
  }
  if (rightPressed) {
    changeXBy(10, "paddle");
    if (getX("paddle") > getWidth() - getWidth("paddle")){
      setX(getWidth() - getWidth("paddle"), "paddle");
    }
  }
}

function keyDown(event) {
  if (event.code == "ArrowLeft") {
    leftPressed = true;
  }
  if (event.code == "ArrowRight") {
    rightPressed = true;
  }
  
}

function keyUp(event) {
  if (event.code == "ArrowLeft") {
    leftPressed = false;
  }
  if (event.code == "ArrowRight") {
    rightPressed = false;
  }
}

init();