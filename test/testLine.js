"use strict";
const Line = require("../src/line");
const assert = require("assert");

describe("isEqualTo", () => {
  it("should give true if two lines are equal", () => {
    const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
    const lineB = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
    assert.strictEqual(lineA.isEqualTo(lineB), true);
  });
  it("should give false if two lines are not equal", () => {
    const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
    const lineB = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
    assert.strictEqual(lineA.isEqualTo(lineB), false);
  });
  it("should give false if line is compared with other type ", () => {
    const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
    const anotherObj = { endA: { x: 1, y: 1 }, endB: { x: 1, y: 10 } };
    assert.strictEqual(lineA.isEqualTo(anotherObj), false);
  });
  it("should give false if line is compared with other type which doesn't have x, y fields ", () => {
    const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
    const anotherObj = "";
    assert.strictEqual(lineA.isEqualTo(anotherObj), false);
  });
});

describe("toString", () => {
  it("should represent ends of points of the line", () => {
    const line = new Line({ x: 5, y: 10 }, { x: 10, y: 10 });
    assert.strictEqual(line.toString(), "Line (5,10)-----(10,10)");
  });
});
