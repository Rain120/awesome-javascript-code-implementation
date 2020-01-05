/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-23 19:55:49
 */

class Shape {
  draw(): void {}
}

class Square {
  shape: Shape;

  constructor(shape: Shape) {
    this.shape = shape;
  }

  draw(): void {
    this.shape.draw();
  }
}

class Star {
  shape: Shape;

  constructor(shape: Shape) {
    this.shape = shape;
  }

  draw(): void {
    this.shape.draw();
  }
}

class ShapeMaker {
  square: Square;
  star: Star;

  constructor(square: Square, star: Star) {
    this.square = square;
    this.star = star;
  }

  drawStar(): void {
    this.star.draw();
  }

  drawSquare(): void {
    this.square.draw();
  }
}
