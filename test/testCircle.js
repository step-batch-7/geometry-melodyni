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
    it("should give false if locations are different but size of circles are equal", () => {
      const circleA = new Circle({ x: 0, y: 0 }, 5);
      const circleB = new Circle({ x: 0, y: 0 }, 10);
      assert.isFalse(circleA.isEqualTo(circleB));
    });
    it("should give false if size are different but locations of circles are equal", () => {
      const circleA = new Circle({ x: 0, y: 0 }, 5);
      const circleB = new Circle({ x: 1, y: 1 }, 5);
      assert.isFalse(circleA.isEqualTo(circleB));
    });
  });
  describe("area", () => {
    it("should calculate the area of circle", () => {
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.approximately(circle.area, 314.15, 1);
    });
  });
});
