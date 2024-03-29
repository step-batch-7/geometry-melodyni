"use strict";

const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");
const Rectangle = require("../src/rectangle");

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
  });
  describe("findDistanceTo", () => {
    it("should give the distance between two points", () => {
      const pointA = new Point(2, 2);
      const pointB = new Point(5, 2);
      assert.strictEqual(pointA.findDistanceTo(pointB), 3);
    });
    it("should give 0 if two given points are same ", () => {
      const pointA = new Point(5, 2);
      const pointB = new Point(5, 2);
      assert.strictEqual(pointA.findDistanceTo(pointB), 0);
    });
    it("should give NaN if other is not an instance of Point ", () => {
      const pointA = new Point(5, 2);
      const pointB = "";
      assert.isNaN(pointA.findDistanceTo(pointB));
    });
    it("should give NaN if other is not an instance of Point but have x y fields ", () => {
      const pointA = new Point(5, 2);
      const pointB = { x: 5, y: 2 };
      assert.isNaN(pointA.findDistanceTo(pointB));
    });
  });
  describe("isOn", () => {
    it("should give true if point is on the line", () => {
      const pointA = new Point(2, 1);
      const lineA = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      assert.isTrue(pointA.isOn(lineA));
    });
    it("should give false if point is not on the line", () => {
      const pointA = new Point(0, 0);
      const lineA = new Line({ x: 1, y: 1 }, { x: 6, y: 1 });
      assert.isFalse(pointA.isOn(lineA));
    });
    it("should give true if point is on the given circle ", () => {
      const pointA = new Point(1, 6);
      const circle = new Circle({ x: 1, y: 1 }, 5);
      assert.isTrue(pointA.isOn(circle));
    });
    it("should give false if point is not on the given circle ", () => {
      const pointA = new Point(0, 0);
      const circle = new Circle({ x: 1, y: 1 }, 5);
      assert.isFalse(pointA.isOn(circle));
    });
    it("should give true if point is on the given rectangle ", () => {
      const pointA = new Point(5, 6);
      const rectangle = new Rectangle({ x: 10, y: 10 }, { x: 5, y: 5 });
      assert.isTrue(pointA.isOn(rectangle));
    });
    it("should give false if point is not on the given rectangle", () => {
      const pointA = new Point(0, 0);
      const rectangle = new Rectangle({ x: 10, y: 10 }, { x: 5, y: 5 });
      assert.isFalse(pointA.isOn(rectangle));
    });
  });
});
