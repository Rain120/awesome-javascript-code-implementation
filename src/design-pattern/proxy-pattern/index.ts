/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-12 23:21:09
 */

class RealImg {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadImg();
  }

  show(): void {
    console.log('todo', this.fileName);
  }

  loadImg(): void {
    console.log('todo', this.fileName);
  }
}

class ProxyImg {
  realImg: RealImg;

  constructor(fileName: string) {
    this.realImg = new RealImg(fileName);
  }

  show(): void {
    this.realImg.show();
  }
}
