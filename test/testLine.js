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
