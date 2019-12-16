"use strict";
const Point = require("./point");

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isInRange = function(number, range) {
  const [lowerLimit, higherLimit] = range.sort((a, b) => a - b);
  return lowerLimit <= number && number <= higherLimit;
};

const arePointsCollinear = function(pointA, pointB, pointC) {
  const [x1, y1] = [pointA.x, pointA.y];
  const [x2, y2] = [pointB.x, pointB.y];
  const [x3, y3] = [pointC.x, pointC.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
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
    return other.x === this.findX(other.y) || other.y === this.findY(other.x);
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) return false;
    const areLinesMeeting = arePointsCollinear(
      this.endA,
      this.endB,
      other.endA
    );
    return !areLinesMeeting && this.slope === other.slope;
  }

  findX(ordinate) {
    const range = [this.endA.y, this.endB.y];
    if (!isInRange(ordinate, range)) return NaN;
    if (this.slope == 0) return this.endA.x;
    return (ordinate - this.endA.y) / this.slope + this.endA.x;
  }

  findY(abscissa) {
    const range = [this.endA.x, this.endB.x];
    if (!isInRange(abscissa, range)) return NaN;
    if (this.slope === Infinity || this.slope === -Infinity) return this.endA.y;
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
