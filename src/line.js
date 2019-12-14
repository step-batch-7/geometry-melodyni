"use strict";
const Point = require("./point");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isAbscissaInRange = function(abscissa, endAX, endBX) {
  return (
    (endAX >= abscissa && abscissa >= endBX) ||
    (endBX >= abscissa && abscissa >= endAX)
  );
};

const isOrdinateInRange = function(ordinate, endAY, endBY) {
  return (
    (endAY >= ordinate && ordinate >= endBY) ||
    (endBY >= ordinate && ordinate >= endAY)
  );
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return (
      isAbscissaInRange(other.x, this.endA.x, this.endB.x) &&
      isOrdinateInRange(other.y, this.endA.y, this.endB.y)
    );
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    return this.slope === other.slope;
  }

  findX(ordinate) {
    if (!isOrdinateInRange(ordinate, this.endA.y, this.endB.y)) return NaN;
    return (ordinate - this.endA.y) / this.slope + this.endA.x;
  }

  findY(abscissa) {
    return (abscissa - this.endA.x) * this.slope + this.endA.y;
  }

  split() {
    const midAbscissa = (this.endA.x + this.endB.x) / 2;
    const midOrdinate = (this.endA.y + this.endB.y) / 2;
    const midPoint = new Point(midAbscissa, midOrdinate);
    const lineA = new Line(this.endA, midPoint);
    const lineB = new Line(midPoint, this.endB);
    return [lineA, lineB];
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get length() {
    return Math.sqrt(
      Math.pow(this.endB.x - this.endA.x, 2) +
        Math.pow(this.endB.y - this.endA.y, 2)
    );
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }
}

module.exports = Line;
