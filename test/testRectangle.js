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
});
