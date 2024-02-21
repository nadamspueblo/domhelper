function main() {
  createTextBox("test");
  createButton("button1", "Go", 0, 40);
  addOnClickEvent("button1", buttonClicked);
}

function buttonClicked() {
  console.log(getInputValue("test"));
}

main();