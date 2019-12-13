"use strict";
const areEndsEqual = function(endA, endB) {
  return endA.x == endB.x && endA.y == endB.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  isEqualTo(otherLine) {
    const isTypeEqual = otherLine instanceof Line;
    return (
      isTypeEqual &&
      areEndsEqual(this.endA, otherLine.endA) &&
      areEndsEqual(this.endB, otherLine.endB)
    );
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-----(${this.endB.x},${this.endB.y})`;
  }
}

module.exports = Line;
