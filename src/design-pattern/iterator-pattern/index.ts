/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-12 20:29:44
 */

import { NumberArrayMap } from 'types'

class Container {
  list: NumberArrayMap;

  constructor(list: NumberArrayMap) {
    this.list = list
  }

  getIterator(): Iterator {
    return new Iterator(this);
  }
}

class Iterator {
  private _list: NumberArrayMap;
  private _index: number;

  constructor(container: Container) {
    this._index = 0;
    this._list = container.list;
  }

  next(): number | null {
    if (this.hasNext()) {
      return this._list[this._index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this._index >= this._list.length;
  }
}
