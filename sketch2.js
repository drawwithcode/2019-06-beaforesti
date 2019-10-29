var button;
var myCanvas;
var text;
var col1 = '#00c2D1';

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  background(col1);

  var sketchContainer = select("#sketch");

  // parent elements
  myCanvas.parent(sketchContainer);

  //div element for the text
  text = createDiv('Dream bigger.');
  text.position(100, 200);

  //button to change page
  button = createButton("Keep on dreaming!");
  button.style('background-color', '#ed33b9')
  button.position(width - 200, height - 100);
  button.mouseClicked(changePage);

}

function draw() {
  // the text changes
  text.style('font-size', mouseY + 'px');

}

function changePage() {
  window.open("page3.html", "_self");
}
