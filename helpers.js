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
