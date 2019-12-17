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
    it("should give 0 as area if diagonal of rectangle is parallel to x axis", () => {
      const rectangle = new Rectangle({ x: 4, y: 4 }, { x: 4, y: 1 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should give 0 as area if diagonal of rectangle is parallel to y axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 10, y: 5 });
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
  describe("hasPoint", () => {
    it("should give true if given point is on the given rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      const point = new Point(4, 0);
      assert.isTrue(rectangle.hasPoint(point));
    });
    it("should give false if given point is not on the given line", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      const point = new Point(-1, -1);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should give false if given value is not an instance of point but has x y fields", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      const point = { x: 0, y: 4 };
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should give false if given value is not an instance and doesn't have x y fields", () => {
      const rectangle = new Rectangle({ x: 2, y: 2 }, { x: 4, y: 4 });
      const point = [];
      assert.isFalse(rectangle.hasPoint(point));
    });
  });
  describe("covers", () => {
    it("should give true if point is inside the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(2, 2);
      assert.isTrue(rectangle.covers(point));
    });
    it("should give true if point is on the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(4, 4);
      assert.isTrue(rectangle.covers(point));
    });
    it("should give false if point is outside the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(5, 5);
      assert.isFalse(rectangle.covers(point));
    });
    it("should give false if other is not an instance of point ", () => {
      const rectangle = new Rectangle({ x: 1, y: 5 }, { x: 4, y: 4 });
      const other = {};
      assert.isFalse(rectangle.covers(other));
    });
    it("should give false if other is not an instance of point but has required fields ", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 4, y: 4 });
      const other = { x: 2, y: 2 };
      assert.isFalse(rectangle.covers(other));
    });
  });
  describe("isEqualTo", () => {
    it("should give true if rectangles are equal", () => {
      const rectangleA = new Rectangle({ x: 5, y: 5 }, { x: 10, y: 0 });
      const rectangleB = new Rectangle({ x: 5, y: 5 }, { x: 10, y: 0 });
      assert.isTrue(rectangleA.isEqualTo(rectangleB));
    });

    it("should give false if locations are different but size of rectangle are equal", () => {
      const rectangleA = new Rectangle({ x: 5, y: 5 }, { x: 0, y: 0 });
      const rectangleB = new Rectangle({ x: 5, y: 5 }, { x: 10, y: 10 });
      assert.isFalse(rectangleA.isEqualTo(rectangleB));
    });

    it("should give false if other is not a rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
      const other = [];
      assert.isFalse(rectangle.isEqualTo(other));
    });
    it("should give false if other is not a rectangle but has required fields", () => {
      const rectangle = new Rectangle({ x: 5, y: 5 }, { x: 10, y: 0 });
      const other = { endA: { x: 5, y: 5 }, endC: { x: 10, y: 0 } };
      assert.isFalse(rectangle.isEqualTo(other));
    });
  });
});
