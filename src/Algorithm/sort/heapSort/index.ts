/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 20:50:03
 */

import { NumberArrayMap } from '../../../types';

export function heapSort(arr: NumberArrayMap): NumberArrayMap {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  buildMaxHeap(arr, len);

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0, len);
  }
  return arr;
}

function buildMaxHeap(arr: NumberArrayMap, len: number) {
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }
}

function heapify(arr: NumberArrayMap, i: number, len: number) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}

function swap(arr: NumberArrayMap, i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
