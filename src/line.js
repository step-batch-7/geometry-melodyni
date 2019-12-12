class Line {
  constructor(point1X, point1Y, point2X, point2Y) {
    this.point1X = point1X;
    this.point1Y = point1Y;
    this.point2X = point2X;
    this.point2Y = point2Y;
  }

  isEqualTo(otherLine) {
    const x1 = this.point1X == otherLine.point1X;
    const y1 = this.point1Y == otherLine.point1Y;
    const x2 = this.point2X == otherLine.point2X;
    const y2 = this.point2Y == otherLine.point2Y;
    return x1 && y1 && x2 && y2;
  }
  toString() {
    return `Line (${this.point1X},${this.point1Y})----------(${this.point2X},${this.point2Y})`;
  }
}
module.exports = Line;
