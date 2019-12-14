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
});
