"use strict";

const Point = require("./point");
const Line = require("./line");

const isInRange = function(number, range) {
  const [lowerLimit, higherLimit] = range.sort((a, b) => a - b);
  return lowerLimit <= number && number <= higherLimit;
};

const calcLengthAndWidth = function(endA, endC) {
  const length = Math.abs(endC.x - endA.x);
  const width = Math.abs(endC.y - endA.y);
  return [length, width];
};

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }
  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const diagonalA = new Line(this.endA, this.endC);
    const otherDiagonal = new Line(other.endA, other.endC);
    return otherDiagonal.isEqualTo(diagonalA);
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    const areXEqual = this.endA.x === other.x || this.endC.x === other.x;
    const areYEqual = this.endA.y === other.y || this.endC.y === other.y;
    const areXinRange = isInRange(other.x, [this.endA.x, this.endC.x]);
    const areYinRange = isInRange(other.y, [this.endA.y, this.endC.y]);
    return (areXEqual && areYinRange) || (areYEqual && areXinRange);
  }

  covers(other) {
    if (!(other instanceof Point)) return false;
    return (
      isInRange(other.x, [this.endA.x, this.endC.x]) &&
      isInRange(other.y, [this.endA.y, this.endC.y])
    );
  }

  get area() {
    const [length, width] = calcLengthAndWidth(this.endA, this.endC);
    return length * width;
  }
  get perimeter() {
    const [length, width] = calcLengthAndWidth(this.endA, this.endC);
    return 2 * (length + width);
  }
}

module.exports = Rectangle;
