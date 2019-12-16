"use strict";
const Point = require("../src/point");

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    const isCommonCentre = this.centre.isEqualTo(other.centre);
    return isCommonCentre && this.radius === other.radius;
  }
  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }
}
module.exports = Circle;
