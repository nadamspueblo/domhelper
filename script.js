



function init() {
  createElement("button1", "button");
  setText("button1", "Submit");
  setX("button1", 200);
  setY("button1", 300);
  createRect(100, 200, 400, 75, "blue", "blueRect");
  rotate("blueRect", 45);
  createCircle(600, 200, 50, "red");
  setProperty("blueRect", "border-radius", "4px");
  console.log(getWindowWidth());
}

function mainLoop() {
  move("blueRect", 5);
}

init();