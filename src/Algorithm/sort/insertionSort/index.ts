/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 21:02:34
 */

import { BaseArrayMap } from '../../../types';

export function insertionSort(arr: BaseArrayMap): BaseArrayMap {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let preIndex: number = 0;
  let current: any = null;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
