"use strict";
class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  isEqualTo(otherLine) {
    const i = otherLine instanceof Line;
    const pointA =
      this.endA.x == otherLine.endA.x && this.endA.y == otherLine.endA.y;
    const pointB =
      this.endB.x == otherLine.endB.x && this.endB.y == otherLine.endB.y;
    return i && pointA && pointB;
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y})----------(${this.endB.x},${this.endB.y})`;
  }
}

console.log(line.toString());

module.exports = Line;