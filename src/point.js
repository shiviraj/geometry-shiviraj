class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(operation) {
    return operation(this.x, this.y);
  }
  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x === other.x && this.y === other.y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  findDistanceTo(other) {
    const dX = other.x - this.x;
    const dY = other.y - this.y;
    return Math.hypot(dX, dY);
  }
  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
