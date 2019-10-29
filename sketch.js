var checkbox;
var checkbox2;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight / 2)

  background('#ffd425');

  //checkboxes Yes and No
  checkbox = createCheckbox('Yes!', false);
  checkbox.changed(myCheckedEvent);
  checkbox.position(50, 100);
  checkbox.style('font-size', '50px');
  checkbox.style('color', 'white');

  checkbox2 = createCheckbox('No.', false);
  checkbox2.changed(myCheckedEvent2);
  checkbox2.position(50, 200);
  checkbox2.style('font-size', '50px');
  checkbox2.style('color', 'white');
}

//open a new page if you want to be a dreamer
function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
    window.open("page2.html", "_self");

  } else {
    console.log('Unchecking!');

  }
}

//Advise if you dont' want to be a dreamer
function myCheckedEvent2() {
  if (this.checked()) {
    console.log('Checking!');
    createP("This page doesnt' fit for you. If you change your mind check 'Yes'.", 100, 300)

  } else {
    console.log('Unchecking!');
  }
}
