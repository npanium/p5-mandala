const CRYSTAL_SIZE = 500;
// const SIDES = 4;
let PALETTE = [];
let SIDES;
let SHAPE;

function setup() {
  var myCanvas = createCanvas(550, 550, SVG);
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
  const layer = new Circles();
  layer.render();

  const simpleLines = new SimpleLines();
  simpleLines.render();

  const outlineShape = new OutlineShape();
  outlineShape.render();
  // SIDES = shapeSides(); //Set the number of sides of the polygon

  // let picker = random(1);
  // if (picker > 0.3) {
  //   outlineShape();
  // }

  // picker = random(1);
  // if (picker > 0.3) {
  //   simpleLines();
  // }

  // picker = random(1);
  // if (picker > 0.3) {
  //   circles();
  // }

  new Vivus("svg-figure", {
    duration: 50,
  });
}
