/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-05 23:32:04
 */

class Decorator {
  circle: Circle;

  constructor(circle: Circle) {
    this.circle = circle;
  }

  draw(): void {
    this.circle.draw();
  }

  setRedBorder(circle: Circle): void {
    console.log('setRedBorder', this.circle);
  }
}

class ShapeDecorator {
  circleShape: CircleShape;

  constructor(circleShape: CircleShape) {
    this.circleShape = circleShape;
  }

  draw(): void {
    console.log('ShapeDecorator Draw');
    this.circleShape.draw();
  }
}

class RectShape implements Rectangle {
  draw(): void {
    console.log('Draw Circle');
  }
}

class CircleShape implements Circle {
  draw(): void {
    console.log('Draw Circle');
  }
}

class Circle {
  draw(): void {
    console.log('Draw Circle');
  }
}

class Rectangle {
  draw(): void {
    console.log('Draw Circle');
  }
}
