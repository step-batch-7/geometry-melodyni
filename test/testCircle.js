"use strict";

const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

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
    it("should give false if other is not a circle", () => {
      const circleA = new Circle({ x: 0, y: 0 }, 5);
      const other = [];
      assert.isFalse(circleA.isEqualTo(other));
    });
    it("should give false if other is not a circle but has required fields", () => {
      const circleA = new Circle({ x: 0, y: 0 }, 5);
      const other = { centre: { x: 0, y: 0 }, radius: 5 };
      assert.isFalse(circleA.isEqualTo(other));
    });
  });
  describe("area", () => {
    it("should calculate the area of circle", () => {
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.approximately(circle.area, 314.15, 1);
    });
  });
  describe("perimeter", () => {
    it("should calculate the perimeter of circle", () => {
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.approximately(circle.perimeter, 62.83, 1);
    });
  });
  describe("hasPoint", () => {
    it("should give true if circle has given point", () => {
      const point = new Point(15, 5);
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.isTrue(circle.hasPoint(point));
    });
    it("should give false if circle doesn't have given point", () => {
      const point = new Point(4, 5);
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.isFalse(circle.hasPoint(point));
    });
    it("should give false if given point is not an instance of point and  has no x y fields", () => {
      const point = "";
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.isFalse(circle.hasPoint(point));
    });
    it("should give false if given point is not an instance of point but has x y fields", () => {
      const point = { x: 4, y: 5 };
      const circle = new Circle({ x: 5, y: 5 }, 10);
      assert.isFalse(circle.hasPoint(point));
    });
  });
  describe("moveTo", () => {
    it("should create a new Circle with same radius but on new given center", () => {
      const centre = new Point({ x: 0, y: 0 });
      const circleA = new Circle({ x: 5, y: 5 }, 10);
      const circleB = new Circle(centre, 10);
      assert.deepStrictEqual(circleA.moveTo(centre), circleB);
    });
    it("should give null if given value for centre is not an instance of point", () => {
      const centre = "";
      const circleA = new Circle({ x: 5, y: 5 }, 10);
      assert.isNull(circleA.moveTo(centre));
    });
  });
});
