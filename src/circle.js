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

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    return (
      Math.pow(other.x - this.centre.x, 2) +
        Math.pow(other.y - this.centre.y, 2) ===
      this.radius ** 2
    );
  }

  moveTo(centre) {
    return new Circle(centre, this.radius);
  }

  get area() {
    return 3.1415 * this.radius * this.radius;
  }
  get perimeter() {
    return 2 * 3.1415 * this.radius;
  }

  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }
}
module.exports = Circle;
