"use strict";

const Point = require("./point");
const Line = require("./line");

class Rectangle {
  #pointB;
  #pointD;
  constructor(endA, endB) {
    this.pointA = new Point(endA.x, endA.y);
    this.pointC = new Point(endB.x, endB.y);
    this.#pointB = new Point(endB.x, endA.y);
    this.#pointD = new Point(endA.x, endB.y);
  }
  toString() {
    return `[Rectangle (${this.pointA.x},${this.pointA.y}) to (${this.pointC.x},${this.pointC.y})]`;
  }
  get length() {
    return this.pointA.findDistanceTo(this.#pointB);
  }

  get width() {
    return this.pointA.findDistanceTo(this.#pointD);
  }

  get area() {
    return this.length * this.width;
  }
  get perimeter() {
    return 2 * (this.length + this.width);
  }
}

module.exports = Rectangle;
