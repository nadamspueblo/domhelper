createElement("h1", "heading");
setWidth(getWidth(), "heading");
setText("Welcome", "heading");
setColor("orange", "heading");
setProperty("text-align", "center", "heading");

createButton("start-button", "Start");
setX(getWidth() / 2 - getWidth("start-button") / 2, "start-button");
setY(getHeight() / 2 - getHeight("start-button") / 2, "start-button");
addOnClickEvent("start-button", start);

function start() {
  console.log("Woohoo");
}
