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

// function circles() {
//   const numShapes = SIDES;

//   const angle = 360 / numShapes;
//   const shapeSize = (CRYSTAL_SIZE / 2) * 0.93;
//   const position = CRYSTAL_SIZE / 2 - shapeSize / 2;
//   const strokeColor = getRandomFromPalette();

//   noFill();
//   stroke(strokeColor);
//   strokeWeight(1);
//   push();
//   //
//   translate(width / 2, height / 2);
//   for (let i = 0; i <= numShapes; i++) {
//     ellipse(0, -position, shapeSize, shapeSize);
//     rotate(angle);
//   }
//   //
//   pop();
// }

// function outlineShape() {
//   const strokeColor = getRandomFromPalette();
//   const octagonTrue = random([true, false]);
//   const weight = randomBinary() ? 1 : 3;
//   SHAPE = octagonTrue;

//   stroke(strokeColor);
//   strokeWeight(weight);

//   noFill();
//   push();
//   //
//   translate(width / 2, height / 2);
//   if (octagonTrue) {
//     polygon(0, 0, CRYSTAL_SIZE / 2);
//   } else {
//     ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
//   }
//   //
//   pop();
// }

// function simpleLines() {
//   const stepOut = 8;
//   const numSteps = randomBinary() ? stepOut : int(stepOut * 1.25);
//   const step = CRYSTAL_SIZE / 2 / numSteps;

//   const start = floor(random(1, numSteps));
//   const stop = floor(random(start + 1, numSteps + 1));

//   let numSides = SIDES;
//   const strokeColor = getRandomFromPalette();
//   const weight = randomBinary() ? 1 : 3;
//   noFill();

//   push();
//   //
//   translate(width / 2, height / 2);
//   strokeWeight(weight);
//   stroke(PALETTE[0]);
//   // ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
//   stroke(strokeColor);

//   if (SHAPE) {
//     //if there is a circle, the number of lines could be any. If the shape is a hexagon, lines could be 6 or 12. If shape is a square or an octagon, lines could be 4 or 8.
//     if (numSides % 4 !== 0) {
//       drawLines(step, start, stop, random([6, 12]));
//     } else {
//       drawLines(step, start, stop, random([4, 8, 16]));
//     }
//   } else {
//     drawLines(step, start, stop, random([4, 6, 8, 12, 16]));
//   }

//   //
//   pop();
// }

// function randomSelectTwo() {
//   const rando = random(1);

//   if (rando < 0.25) {
//     return SIDES;
//   } else if (rando >= 0.25 && rando < 0.5) {
//     return SIDES * 2;
//   } else if (rando >= 0.5 && rando < 0.75) {
//     return SIDES * 3;
//   } else {
//     return (SIDES * 3) / 2;
//   }
// }
