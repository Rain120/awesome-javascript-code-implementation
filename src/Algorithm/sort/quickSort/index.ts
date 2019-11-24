/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 20:51:18
 */

import { NumberArrayMap } from '../../../types';

export function quickSort(arr: NumberArrayMap, left?: number, right?: number) {
  let len: number = arr.length;
  let partitionIndex: number = 0;
  let lIndex: number = typeof left !== 'number' ? 0 : left;
  let rIndex: number = typeof right !== 'number' ? len - 1 : right;

  if (lIndex < rIndex) {
    partitionIndex = partition(arr, lIndex, rIndex);
    quickSort(arr, lIndex, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, rIndex);
  }
  return arr;
}

function partition(arr: NumberArrayMap, left: number, right: number) {
  let pivot: number = left;
  let index: number = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}

// export function quickSort(arr: NumberArrayMap): NumberArrayMap {
//   let len = arr.length;
//   if (len < 2) {
//     return arr;
//   }
//   let pivotIndex: number = Math.floor(len / 2);
//   let pivot: number = arr.splice(pivotIndex, 1)[0];
//   let left: NumberArrayMap = [];
//   let right: NumberArrayMap = [];
//   for (let i = 0; i < len; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// }
