"use strict";
const arePointsEqual = function(pointA, pointB) {
  return pointA.x == pointB.x && pointA.y == pointB.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  isEqualTo(other) {
    return (
      other instanceof Line &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-----(${this.endB.x},${this.endB.y})`;
  }
}

module.exports = Line;
