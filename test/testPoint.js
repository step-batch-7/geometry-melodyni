"use strict";

const chai = require("chai");
const assert = chai.assert;
const Point = require("../src/point");

describe("point", () => {
  describe("toString", () => {
    it("should represent a point in string", () => {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), "[Point @(2,3)]");
    });
  });
  describe("isEqualTo", () => {
    it("should give true if two points are equal", () => {
      const pointA = new Point(2, 3);
      const pointB = new Point(2, 3);
      assert.isTrue(pointA.isEqualTo(pointB));
    });
    it("should give false if two points are not equal", () => {
      const pointA = new Point(2, 3);
      const pointB = new Point(8, 10);
      assert.isNotTrue(pointA.isEqualTo(pointB));
    });
    it("should give false if point is compared with other type having x, y fields", () => {
      const pointA = new Point(2, 3);
      const pointB = { x: 2, y: 3 };
      assert.isNotTrue(pointA.isEqualTo(pointB));
    });
    it("should give false if point is compared with other type ", () => {
      const pointA = new Point(2, 3);
      const pointB = [];
      assert.isNotTrue(pointA.isEqualTo(pointB));
    });
  });
  describe("clone", () => {
    it("should give exact same pointB for a given pointA", () => {
      const pointA = new Point(4, 5);
      const pointB = pointA.clone(4, 5);
      assert.isTrue(pointA.isEqualTo(pointB));
    });
  });
  describe("visit", () => {
    it("should visit the given reference and perform operation on coordinates of point", () => {
      const pointA = new Point(5, 2);
      const addCoordinates = function(x, y) {
        return x + y;
      };
      assert.strictEqual(pointA.visit(addCoordinates), 7);
    });
    it("should visit the given reference and perform operation on coordinates of point", () => {
      const pointA = new Point(5, 2);
      const multipleCoordinates = function(x, y) {
        return x * y;
      };
      assert.strictEqual(pointA.visit(multipleCoordinates), 10);
    });
  });
});
