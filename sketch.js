const CRYSTAL_SIZE = 500;
// const SIDES = 4;
let PALETTE = [];
let SIDES;
let SHAPE;

const layers = [];

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
  const dottedLines = new DottedLines();
  dottedLines.render();

  const centeredShape = new CenteredShape();
  centeredShape.render();

  const ringOfShapes = new RingOfShapes();
  ringOfShapes.render();

  const steppedPolygons = new SteppedPolygons();
  steppedPolygons.render();

  // let picker = random(1);
  // if (picker > 0.3) {
  //   layers.push(new OutlineShape());
  // }

  // picker = random(1);
  // if (picker > 0.3) {
  //   layers.push(new SimpleLines());
  // }

  // picker = random(1);
  // if (picker > 0.3) {
  //   layers.push(new Circles());
  // }

  // layers.forEach((layer) => {
  //   layer.render();
  // });

  // new Vivus("svg-figure", {
  //   duration: 50,
  // });
}
