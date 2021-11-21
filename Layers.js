class Layer {
  constructor() {
    this.sides = shapeSides();
    this.numShapes = this.sides;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
    this.thinStroke = 1;
    this.thickStroke = 3;
    this.strokeColor = getRandomFromPalette();

    this.polygonTrue = random([true, false]); //decides if the shape would be a circle or a polygon
  }
}

class Circles extends Layer {
  constructor() {
    super();
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93;
    this.position = CRYSTAL_SIZE / 2 - this.shapeSize / 2;
  }
  render() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(1);
    push();
    //
    translate(width / 2, height / 2);
    for (let i = 0; i <= this.numShapes; i++) {
      ellipse(0, -this.position, this.shapeSize, this.shapeSize);
      rotate(this.angle);
    }
    //
    pop();
  }
}

class SimpleLines extends Layer {
  constructor() {
    super();
    this.numSteps = randomBinary() ? this.stepsOut : int(this.stepsOut * 1.25);
    this.step = CRYSTAL_SIZE / 2 / this.numSteps;
    this.weight = randomBinary() ? this.thinStroke : this.thickStroke;
    this.start = floor(random(1, this.numSteps));
    this.stop = floor(random(this.start + 1, this.numSteps + 1));
  }
  render() {
    noFill();

    push();
    //
    translate(width / 2, height / 2);
    strokeWeight(this.weight);
    stroke(PALETTE[0]);
    // ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    stroke(this.strokeColor);

    if (this.polygonTrue) {
      //if there is a circle, the number of lines could be any. If the shape is a hexagon, lines could be 6 or 12. If shape is a square or an octagon, lines could be 4 or 8.
      if (this.sides % 4 !== 0) {
        drawLines(this.step, this.start, this.stop, random([6, 12]));
      } else {
        drawLines(this.step, this.start, this.stop, random([4, 8, 16]));
      }
    } else {
      drawLines(this.step, this.start, this.stop, random([4, 6, 8, 12, 16]));
    }

    //
    pop();
  }
}

class OutlineShape extends Layer {
  constructor() {
    super();
    this.weight = randomBinary() ? this.thinStroke : this.thickStroke;
  }
  render() {
    stroke(this.strokeColor);
    strokeWeight(this.weight);

    noFill();
    push();
    //
    translate(width / 2, height / 2);
    if (this.polygonTrue) {
      polygon(0, 0, CRYSTAL_SIZE / 2, this.sides);
    } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    }
    //
    pop();
  }
}
