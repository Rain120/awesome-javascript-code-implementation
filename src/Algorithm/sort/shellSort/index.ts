/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 19:43:47
 */

import { NumberArrayMap } from '../../../types';

export function shellSort(
  arr: NumberArrayMap,
  gapLen: number = 1
): NumberArrayMap {
  let len = arr.length;
  let gap = 1;
  if (len < 2) {
    return arr;
  }
  while (gap < len / gapLen) {
    gap = gap * gapLen + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = arr[i];
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}
