"use strict";

const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("circle", () => {
  describe("toString", () => {
    it("should give string representation of circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const expected = "[Circle @(0,0) radius 5]";
      assert.strictEqual(circle.toString(), expected);
    });
  });
  describe("isEqualTo", () => {
    it("should give true if location and size of circles are equal", () => {
      const circleA = new Circle({ x: 0, y: 0 }, 5);
      const circleB = new Circle({ x: 0, y: 0 }, 5);
      assert.isTrue(circleA.isEqualTo(circleB));
    });
    it("should give false if location is different but size of circles are equal", () => {
      const circleA = new Circle({ x: 0, y: 0 }, 5);
      const circleB = new Circle({ x: 0, y: 1 }, 5);
      assert.isFalse(circleA.isEqualTo(circleB));
    });
  });
});
