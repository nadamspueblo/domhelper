createElement("h1", "heading");
setWidth(getWidth(), "heading");
setText("Welcome", "heading");
setColor("orange", "heading");
setStyle("text-align", "center", "heading");

createButton("start-button", "Start");
setX(getWidth() / 2 - getWidth("start-button") / 2, "start-button");
setY(getHeight() / 2 - getHeight("start-button") / 2, "start-button");
addClickEvent("start-button", start);

function start() {
  createCircle(getRandomInt(0, getWidth()), getRandomInt(0, getHeight()), 50, getRandomColor());
  console.log("Woohoo");
}
