"use strict";
const chai = require("chai");
const assert = chai.assert;
const Line = require("../src/line");

describe("Line", () => {
  describe("isEqualTo", () => {
    it("should give true if two lines are equal", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const lineB = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      assert.isOk(lineA.isEqualTo(lineB));
    });

    it("should give false if two lines are not equal", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const lineB = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      assert.notOk(lineA.isEqualTo(lineB));
    });

    it("should give false if line is compared with other type ", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const other = { endA: { x: 1, y: 1 }, endB: { x: 1, y: 10 } };
      assert.notOk(lineA.isEqualTo(other));
    });

    it("should give false if line is compared with other type which doesn't have x, y fields ", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const other = "";
      assert.notOk(lineA.isEqualTo(other));
    });
  });

  describe("toString", () => {
    it("should represent ends of points of the line", () => {
      const line = new Line({ x: 5, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.toString(), "Line (5,10)-----(10,10)");
    });
  });
  describe("length", () => {
    it("should give length of the line for given positive integer points ", () => {
      const line = new Line({ x: 5, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.length, 5);
    });

    it("should give length of the line for given negative integer points ", () => {
      const line = new Line({ x: -5, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.length, 15);
    });

    it("should give length of the line having floating points", () => {
      const line = new Line({ x: 2.3, y: 10 }, { x: 10.9, y: 10 });
      assert.approximately(line.length, 8, 1);
    });

    it("should give length 0 of the line having same points", () => {
      const line = new Line({ x: 10, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.length, 0);
    });
  });
});
