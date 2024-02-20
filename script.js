

let deg = 0;

function init() {
  createElement("button1", "button");
  setText("button1", "Submit");
  setX("button1", 200);
  setY("button1", 300);
}

function mainLoop() {
  rotate("test", deg);
  deg += 10;
}

init();