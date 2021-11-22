function shapeSides() {
  const shapeSides = random([4, 6, 8]);
  return shapeSides;
}

function randomBinary() {
  const weight = random([true, false]);
  return weight;
}

function polygon(posX, posY, radius, sides) {
  const rotAngle = 360 / sides;
  beginShape();
  //
  for (let i = 0; i < sides; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  //
  endShape(CLOSE);
}

function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);

  return createVector(x, y);
}

function getRandomFromPalette() {
  const rando2 = floor(random(0, PALETTE.length));
  return PALETTE[rando2];
}

function drawLines(step, start, stop, numLines) {
  const angle = 360 / numLines;
  for (let i = 0; i < numLines; i++) {
    line(start * step, 0, stop * step, 0);
    rotate(angle);
  }
}

function myTriangle(center, radius, direction) {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE);
  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
}

function saveSVG() {
  var svgData = $("#svg-figure")[0].outerHTML;
  var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = "npanium-design.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

const layerConstructors = [
  {
    name: "Outline Shape",
    init: () => new OutlineShape(),
    weight: 0.3,
  },
  {
    name: "Centered Shape",
    init: () => new CenteredShape(),
    weight: 0.3,
  },
  {
    name: "Circles",
    init: () => new Circles(),
    weight: 0.3,
  },
  {
    name: "Simple Lines",
    init: () => new SimpleLines(),
    weight: 0.3,
  },
  {
    name: "Dotted Lines",
    init: () => new DottedLines(),
    weight: 0.3,
  },
  {
    name: "Ring of Shapes",
    init: () => new RingOfShapes(),
    weight: 0.3,
  },
  {
    name: "Stepped Polygons",
    init: () => new SteppedPolygons(),
    weight: 0.3,
  },
];
