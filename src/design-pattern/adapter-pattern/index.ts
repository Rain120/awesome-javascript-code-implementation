/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-05 23:31:46
 */

class Adapter {
  specificRequest(): void {}
}

class Target {
  adapter: Adapter;

  constructor(adapter: Adapter) {
    this.adapter = adapter;
  }

  request(): void {
    this.adapter.specificRequest()
  }
}
