/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:59:42
 */

import { NumberArrayMap } from 'types';

export function radixSort(
  arr: NumberArrayMap,
  maxDigit: number
): NumberArrayMap {
  let counter: any = [];
  let mod = 10;
  let dev = 1;
  for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      let bucket = parseInt(((arr[j] % mod) / dev) + '', 10);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = +value;
        }
      }
    }
  }
  return arr;
}
