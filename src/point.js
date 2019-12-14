"use strict";

class Point {
  constructor(abscissa, ordinate) {
    this.x = abscissa;
    this.y = ordinate;
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
}

module.exports = Point;
