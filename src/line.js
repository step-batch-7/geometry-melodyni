"use strict";
const areCoordinatesEqual = function(endOfLineA, endOfLineB) {
  return endOfLineA.x == endOfLineB.x && endOfLineA.y == endOfLineB.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }

  isEqualTo(otherLine) {
    const isTypeEqual = otherLine instanceof Line;
    const areEndsEqual =
      areCoordinatesEqual(this.endA, otherLine.endA) &&
      areCoordinatesEqual(this.endB, otherLine.endB);
    return isTypeEqual && areEndsEqual;
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})----------(${this.endB.x},${this.endB.y})`;
  }
}

module.exports = Line;
