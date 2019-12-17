"use strict";
const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");
const Rectangle = require("../src/rectangle");

describe("rectangle", () => {
  describe("toString", () => {
    it("should give string representation ", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (5,4)]");
    });
  });
  describe("area", () => {
    it("should calculate area of given rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(rectangle.area, 16);
    });
    it("should give 0 as area if all points of rectangle are same", () => {
      const rectangle = new Rectangle({ x: 4, y: 4 }, { x: 4, y: 4 });
      assert.strictEqual(rectangle.area, 0);
    });
  });
  describe("perimeter", () => {
    it("should calculate area of given rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 4 });
      assert.strictEqual(rectangle.perimeter, 14);
    });
    it("should give 0 as perimeter of given rectangle with equal 4 points", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
      assert.strictEqual(rectangle.perimeter, 0);
    });
  });
});
