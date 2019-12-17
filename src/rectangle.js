"use strict";

const Point = require("./point");
const Line = require("./line");

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }
  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }
  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    const { endB, endD } = this.getDiagonalPair;
    const AB = new Line(this.endA, endB);
    const BC = new Line(endB, this.endC);
    const CD = new Line(this.endC, endD);
    const AD = new Line(this.endA, endD);
    return [AB, BC, CD, AD].some(line => other.isOn(line));
  }

  get getDiagonalPair() {
    const endB = new Point(this.endC.x, this.endA.y);
    const endD = new Point(this.endA.x, this.endC.y);
    return { endB, endD };
  }

  get length() {
    return this.endA.findDistanceTo(this.getDiagonalPair.endB);
  }

  get width() {
    return this.endA.findDistanceTo(this.getDiagonalPair.endD);
  }

  get area() {
    return this.length * this.width;
  }
  get perimeter() {
    return 2 * (this.length + this.width);
  }
}

module.exports = Rectangle;
