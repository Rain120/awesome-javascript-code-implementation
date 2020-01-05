/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-22 17:29:47
 */

class Creator {
  create(name: string): Product {
    return new Product(name);
  }
}

class Product {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  init(): void {}

  fn1(): void {}

  fn2(): void {}
}
