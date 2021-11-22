class Layer {
  constructor() {
    this.sides = shapeSides();
    this.numShapes = this.sides;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
    this.thinStroke = 1;
    this.thickStroke = 3;
    this.layerColor = getRandomFromPalette();

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
    stroke(this.layerColor);
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
    stroke(this.layerColor);

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
    stroke(this.layerColor);
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

class DottedLines extends Layer {
  constructor() {
    super();
    this.numShapes = randomBinary() ? this.sides : this.sides * 2;
    this.angle = 360 / this.numShapes;
    this.shapeSides = 3;
    this.centerOffset = this.singleStep;
  }
  render() {
    fill(this.layerColor);
    noStroke();
    push();
    //
    translate(width / 2, height / 2);
    for (let i = 0; i <= this.numShapes; i++) {
      for (
        let x = this.centerOffset;
        x < CRYSTAL_SIZE / 2;
        x += this.singleStep
      ) {
        console.log(this.shapeSides);
        rect(x, 0, this.shapeSides, this.shapeSides);
      }

      rotate(this.angle);
    }
    //
    pop();
  }
}

class CenteredShape extends Layer {
  constructor() {
    super();
    this.shapeSize =
      floor(random(this.stepsOut / 2, this.stepsOut)) * this.singleStep;
  }
  render() {
    fill(this.layerColor);
    noStroke();
    push();
    //
    translate(width / 2, height / 2);
    if (this.polygonTrue) {
      rotate(this.angle / 2);
      polygon(0, 0, this.shapeSize, this.sides);
    } else {
      ellipse(0, 0, this.shapeSize, this.shapeSize);
    }
    //
    pop();
  }
}

class RingOfShapes extends Layer {
  constructor() {
    super();
    this.steps = floor(random(1, this.stepsOut));
    this.center = this.steps * this.singleStep;
    this.randomShape = random(1);
    this.direction = randomBinary(); //used for triangle only
    this.fillColor = randomBinary() ? this.layerColor : color(0, 1);
    this.weight = randomBinary() ? this.thinStroke : this.thinStroke;

    if (this.steps < this.stepsOut / 2) {
      this.radius = floor(random(1, this.steps)) * this.singleStep;
    } else if (this.steps > this.stepsOut / 2) {
      this.radius =
        floor(random(1, this.stepsOut - this.steps)) * this.singleStep;
    } else {
      this.radius = floor(random(1, this.stepsOut / 2 + 1)) * this.singleStep;
    }
  }
  render() {
    stroke(this.layerColor);
    fill(this.fillColor);
    strokeWeight(this.weight);
    push();
    //
    translate(width / 2, height / 2);
    for (let i = 0; i < this.numShapes; i++) {
      if (this.randomShape < 0.33) {
        ellipse(0, this.center, this.radius, this.radius);
      } else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
        rect(0, this.center, this.radius, this.radius);
      } else if (this.randomShape >= 0.66) {
        myTriangle(this.center, this.radius, this.direction);
      }
      rotate(this.angle);
    }
    //
    pop();
  }
}

class SteppedPolygons extends Layer {
  constructor() {
    super();
    this.numSteps = randomBinary() ? this.stepsOut : this.stepsOut * 1.25;
    this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15;
    this.singleStep = (CRYSTAL_SIZE / 2 - this.centerOffset) / this.numSteps;
    this.weight = randomBinary ? this.thinStroke : this.thickStroke;
  }
  render() {
    stroke(this.layerColor);
    noFill();
    strokeWeight(this.weight);
    push();
    //
    translate(width / 2, height / 2);
    rotate(this.angle / 2);
    for (let i = 1; i < this.numSteps + 1; i++) {
      polygon(0, 0, this.centerOffset + i * this.singleStep, this.sides);
    }
    //
    pop();
  }
}
