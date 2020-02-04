/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 17:52:06
 */

import { NumberArrayMap } from 'types';

export function countingSort(arr: NumberArrayMap, maxValue: number): NumberArrayMap {
  let bucket: NumberArrayMap = new Array(maxValue + 1);
  let sortedIndex = 0;
  let arrLen = arr.length;
  let bucketLen = maxValue + 1;
  if (arr.length < 2) {
    return arr;
  }

  for (let i: number = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}
