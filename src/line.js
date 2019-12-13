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
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-----(${this.endB.x},${this.endB.y})`;
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
