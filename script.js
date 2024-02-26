function main() {
  createRect(100, 200, 200, 100, "blue", "r1");
  createRect(250, 250, 200, 100, "red", "r2");
  setColor("orange");
  console.log(getWidth());
  setWidth(400);
  console.log(getWidth());
}


main();