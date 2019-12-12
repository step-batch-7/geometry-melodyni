"use strict";
const Line = require("../src/Line");
const assert = require("assert");

describe("isEqualTo", () => {
  it("should give true if two lines are equals", () => {
    const lineA = new Line(1, 1, 1, 10);
    const lineB = new Line(1, 1, 1, 10);
    assert.strictEqual(lineA.isEqualTo(lineB), true);
  });
  it("should give false if two lines are not equals", () => {
    const lineA = new Line(1, 1, 1, 10);
    const lineB = new Line(1, 1, 10, 10);
    assert.strictEqual(lineA.isEqualTo(lineB), false);
  });
});

describe("toString", () => {
  it("should stringify the Line Object", () => {
    const line = new Line(5, 10, 10, 10);
    assert.strictEqual(
      line.toString(),
      "Line {point1X: 5, point1Y: 10, point2X: 10, point2Y: 10}"
    );
  });
});
