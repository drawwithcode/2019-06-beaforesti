var checkbox;
var button;
var sliders = [];
var myCanvas;

//colors variables
var col1 = '#ffd425';
var col2 = '#0A1045';
var col3 = '#00c2D1';
var col4 = '#f9e900';
var col5 = '#f6af65';
var col6 = '#ed33b9';

var angle = 0;

function setup() {

  myCanvas = createCanvas(windowWidth, windowHeight - 200);
  background(col1);
  noStroke();

  var sketchContainer = select("#sketch");
  myCanvas.parent(sketchContainer);

  //create sliders
  for (var i = 0; i < 5; i++) {
    sliders[i] = createSlider(0, 400, 200);
  }

  //checkbox
  checkbox = createCheckbox('I like it!', false);
  checkbox.changed(myCheckedEvent);
}

function draw() {
  background(col1);


  //set value of the sliders and connect them to shapes
  var offset = 0;
  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 1, 0, 400);
    sliders[i].value(x);
    offset += 0.25;

    fill(color(col2));
    ellipse(width / 2 - 500, x + 100, x);
    fill(color(col3));
    ellipse(width / 2 - 300, x + 50, x * 1.5);
    fill(color(col4));
    ellipse(width / 2, x + 10, x);
    fill(color(col5));
    ellipse(width / 2 + 300, x + 50, x * 1.5);
    fill(color(col6));
    ellipse(width / 2 + 500, x + 100, x);
  }
  angle += 0.1;


}

// create a button to save the canvas
function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
    button = createButton("Print your canvas at the cutest moment.");
    button.mouseClicked(printCanvas);
  } else {
    console.log('Unchecking!');
  }
}


function printCanvas() {
  print('Print');
  saveCanvas(myCanvas, 'My cute crazy canvas', 'jpg');
}
