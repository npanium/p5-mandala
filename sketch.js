const CRYSTAL_SIZE = 150;
// const SIDES = 4;

//layout
const MARGIN = CRYSTAL_SIZE / 2;
const COLUMNS = 3;
const ROWS = 4;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;
const START = CRYSTAL_SIZE / 2 + MARGIN;
//
let PALETTE = [];
ALL_CRYSTALS = [];

let SIDES;
let SHAPE;

function setup() {
  const totalX = START + GRIDBOX * COLUMNS;
  const totalY = START + GRIDBOX * ROWS;

  var myCanvas = createCanvas(totalX, totalY, SVG);
  myCanvas.parent("p5-sketch");

  let svg = document.getElementsByTagName("svg");
  svg[0].id = "svg-figure";

  colorMode(HSL);

  PALETTE = [
    color(29, 81, 79), //light-gold
    color(27, 53, 55), //dark-gold

    // color(355, 80, 42), //red
    // color(2, 80, 54), //orange-red
    // color(25, 100, 54), //orange
    // color(75, 80, 54), //lime

    // color(115, 81, 22), //dark-green
    // color(95, 68, 46), //green
    // color(164, 100, 54), //aquamarine

    // color(218, 80, 54), //blue
    // color(228, 80, 42), //dark-blue
  ];

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  //go to a point on the screen and draw a pixel
  //continue to do this until we run out of room

  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const posX = START + x * GRIDBOX;
      const posY = START + y * GRIDBOX;
      //save the created crystals into an array
      ALL_CRYSTALS.push(new Crystal(posX, posY));
    }
  }

  ALL_CRYSTALS.forEach((crystal) => {
    crystal.render();
  });
  // new Vivus("svg-figure", {
  //   duration: 50,
  // });
  //
}
// console.log(window.innerWidth + " , " + window.innerHeight);
// window.addEventListener("resize", eventFn);

// function eventFn() {
//   console.log(window.innerWidth + " , " + window.innerHeight);
// }
