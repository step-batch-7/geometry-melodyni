"use strict";
const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", () => {
  describe("isEqualTo", () => {
    it("should give true if two lines are equal", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const lineB = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      assert.isTrue(lineA.isEqualTo(lineB));
    });

    it("should give false if two lines are not equal", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const lineB = new Line({ x: 1, y: 1 }, { x: 10, y: 10 });
      assert.isFalse(lineA.isEqualTo(lineB));
    });

    it("should give false if line is compared with other type ", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const other = { endA: { x: 1, y: 1 }, endB: { x: 1, y: 10 } };
      assert.isFalse(lineA.isEqualTo(other));
    });

    it("should give false if line is compared with other type which doesn't have x, y fields ", () => {
      const lineA = new Line({ x: 1, y: 1 }, { x: 1, y: 10 });
      const other = "";
      assert.isFalse(lineA.isEqualTo(other));
    });
  });

  describe("toString", () => {
    it("should represent ends of points of the line", () => {
      const line = new Line({ x: 5, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.toString(), "[Line (5,10) to (10,10)]");
    });
  });
  describe("length", () => {
    it("should calculate length of the line for given points (positive integer value) ", () => {
      const line = new Line({ x: 5, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.length, 5);
    });

    it("should calculate length of the line for given points (negative integer value) ", () => {
      const line = new Line({ x: -5, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.length, 15);
    });

    it("should calculate length of the line for given points (floating value)", () => {
      const line = new Line({ x: 2.3, y: 10 }, { x: 10.9, y: 10 });
      assert.approximately(line.length, 8, 1);
    });

    it("should give 0 for points which is not a line", () => {
      const line = new Line({ x: 10, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.length, 0);
    });
  });

  describe("slope", () => {
    it("should calculate slope of a line for positive integer points", () => {
      const line = new Line({ x: 1, y: 0 }, { x: 3, y: 12 });
      assert.strictEqual(line.slope, 6);
    });

    it("should calculate slope of a line for positive floating points", () => {
      const line = new Line({ x: 1, y: 2.5 }, { x: 3, y: 12.5 });
      assert.approximately(line.slope, 5, 1);
    });

    it("should give slope 0 for equal ordinates", () => {
      const line = new Line({ x: 10, y: 2 }, { x: 12, y: 2 });
      assert.strictEqual(line.slope, 0);
    });

    it("should give NaN for a line with same end Points", () => {
      const line = new Line({ x: 12, y: 12 }, { x: 12, y: 12 });
      assert.isNaN(line.slope);
    });

    it("should give slope Infinity for equal abscissa and endA-y is lesser than endB-y", () => {
      const line = new Line({ x: 10, y: 2 }, { x: 10, y: 10 });
      assert.strictEqual(line.slope, Infinity);
    });

    it("should give slope -Infinity for equal abscissa and endA-y is greater than endB-y", () => {
      const line = new Line({ x: 10, y: 12 }, { x: 10, y: 2 });
      assert.strictEqual(line.slope, -Infinity);
    });
  });

  describe("isParallelTo", () => {
    it("should give true if lines are parallel", () => {
      const lineA = new Line({ x: 0, y: 0 }, { x: 0, y: 10 });
      const lineB = new Line({ x: 10, y: 0 }, { x: 10, y: 10 });
      assert.isTrue(lineA.isParallelTo(lineB));
    });

    it("should give false if lines are not parallel", () => {
      const lineA = new Line({ x: 0, y: 1 }, { x: 10, y: 10 });
      const lineB = new Line({ x: 0, y: 1 }, { x: 2, y: 10 });
      assert.isFalse(lineA.isParallelTo(lineB));
    });

    it("should give false for coincident lines", () => {
      const lineA = new Line({ x: 0, y: 1 }, { x: 10, y: 10 });
      const lineB = new Line({ x: 0, y: 1 }, { x: 10, y: 10 });
      assert.isFalse(lineA.isParallelTo(lineB));
    });

    it("should give false for lines that will meet if extended", () => {
      const lineA = new Line({ x: 0, y: 10 }, { x: 0, y: 0 });
      const lineB = new Line({ x: 0, y: -1 }, { x: 0, y: -10 });
      assert.isFalse(lineA.isParallelTo(lineB));
    });

    it("should give false if other is not an instance of line ", () => {
      const lineA = new Line({ x: 0, y: 2 }, { x: 10, y: 12 });
      const other = [];
      assert.isFalse(lineA.isParallelTo(other));
    });

    it("should give false if other is not an instance of line but have equal slope field", () => {
      const lineA = new Line({ x: 0, y: 2 }, { x: 10, y: 12 });
      const other = { slope: 1 };
      assert.isFalse(lineA.isParallelTo(other));
    });

    it("should give false if lineB is part of lineA", () => {
      const lineA = new Line({ x: -3, y: 2 }, { x: 20, y: 2 });
      const lineB = new Line({ x: -2, y: 2 }, { x: 10, y: 2 });
      assert.isFalse(lineA.isParallelTo(lineB));
    });
  });
  describe("findX", () => {
    it("should calculate abscissa of a line for given ordinate", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      assert.strictEqual(line.findX(4), 4);
    });
    it("should give Nan if given ordinate is lesser than lower ordinate of the line", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      assert.isNaN(line.findX(-5));
    });
    it("should give Nan if given ordinate is greater than higher ordinate of the line", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      assert.isNaN(line.findX(15));
    });
    it("should give NaN if end points of given lines are same", function() {
      const line = new Line({ x: 5, y: 7 }, { x: 5, y: 7 });
      assert.isNaN(line.findX(2));
    });
    it("should give valid x value if more than one x are possible for given ordinate", () => {
      const line = new Line({ x: -10, y: 10 }, { x: 10, y: 10 });
      assert.strictEqual(line.findX(10), -10);
    });
  });
  describe("findY", () => {
    it("should calculate ordinate of a line for given abscissa", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      assert.strictEqual(line.findY(2), 2);
    });
    it("should give Nan if given abscissa is lesser than lower abscissa of the line", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      assert.isNaN(line.findY(-18));
    });
    it("should give Nan if given abscissa  is greater than higher abscissa of the line", () => {
      const line = new Line({ x: 4, y: 4 }, { x: 2, y: 2 });
      assert.isNaN(line.findY(18));
    });
    it("should give NaN if end points of given lines are same", function() {
      const line = new Line({ x: 5, y: 7 }, { x: 5, y: 7 });
      assert.isNaN(line.findY(2));
    });
    it("should give valid y value if more than one y are possible for given abscissa", () => {
      const line = new Line({ x: 1, y: 10 }, { x: 1, y: -10 });
      assert.strictEqual(line.findY(1), 10);
    });
  });
  describe("split", () => {
    it("should split given line into two equal parts", () => {
      const line = new Line({ x: 2, y: 4 }, { x: 6, y: 4 });
      const lineA = new Line({ x: 2, y: 4 }, { x: 4, y: 4 });
      const lineB = new Line({ x: 4, y: 4 }, { x: 6, y: 4 });
      const expected = [lineA, lineB];
      assert.deepStrictEqual(line.split(), expected);
    });
    it("should give two lines of length 0 if length of given line is 0 ", () => {
      const line = new Line({ x: 10, y: 2 }, { x: 10, y: 2 });
      const lineA = new Line({ x: 10, y: 2 }, { x: 10, y: 2 });
      const lineB = new Line({ x: 10, y: 2 }, { x: 10, y: 2 });
      const expected = [lineA, lineB];
      assert.deepStrictEqual(line.split(), expected);
    });
  });
  describe("hasPoint", () => {
    it("should give true if given point is on the given line", () => {
      const line = new Line({ x: 2, y: 4 }, { x: 4, y: 4 });
      const point = new Point(3, 4);
      assert.isTrue(line.hasPoint(point));
    });
    it("should give false if given point is not on the given line", () => {
      const line = new Line({ x: 2, y: 4 }, { x: 4, y: 4 });
      const point = new Point(0, 0);
      assert.isFalse(line.hasPoint(point));
    });

    it("should give false if given value is not an instance of point but has x y fields", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const point = { x: 3, y: 3 };
      assert.isFalse(line.hasPoint(point));
    });

    it("should give false if given value is not an instance and doesn't have x y fields", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      const point = [];
      assert.isFalse(line.hasPoint(point));
    });
  });
  describe("findPointFromStart", () => {
    it("should find a point from start of a line to a given distance ", () => {
      const line = new Line({ x: 2, y: 1 }, { x: 6, y: 1 });
      const expectedPoint = new Point(4, 1);
      assert.isTrue(expectedPoint.isEqualTo(line.findPointFromStart(2)));
    });
    it("should give endB point if given distance is equal to the length of line ", () => {
      const line = new Line({ x: 2, y: 9 }, { x: 8, y: 1 });
      const expectedPoint = new Point(8, 1);
      assert.isTrue(expectedPoint.isEqualTo(line.findPointFromStart(10)));
    });
    it("should give endA point of given line if given distance is 0 ", () => {
      const line = new Line({ x: 2, y: 9 }, { x: 8, y: 1 });
      const expectedPoint = new Point(2, 9);
      assert.isTrue(expectedPoint.isEqualTo(line.findPointFromStart(0)));
    });
  });
  describe("findPointFromEnd", () => {
    it("should find a point from end of a line to a given distance ", () => {
      const line = new Line({ x: 2, y: 1 }, { x: 6, y: 1 });
      const expectedPoint = new Point(4, 1);
      assert.isTrue(expectedPoint.isEqualTo(line.findPointFromEnd(2)));
    });
    it("should give endA point if given distance is equal to the length of line ", () => {
      const line = new Line({ x: 8, y: 1 }, { x: 2, y: 9 });
      const expectedPoint = new Point(8, 1);
      assert.isTrue(expectedPoint.isEqualTo(line.findPointFromEnd(10)));
    });
    it("should give endB point of given line if given distance is 0 ", () => {
      const line = new Line({ x: 8, y: 1 }, { x: 2, y: 9 });
      const expectedPoint = new Point(2, 9);
      assert.isTrue(expectedPoint.isEqualTo(line.findPointFromEnd(0)));
    });
  });
});
