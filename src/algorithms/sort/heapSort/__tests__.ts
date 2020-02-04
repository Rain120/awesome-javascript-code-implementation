/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:00:04
 */

import { heapSort } from '../heapSort';
import { NumberArrayMap } from 'types';

const input: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

test('heapSort([]) should be []', () => {
  expect(heapSort([])).toEqual([]);
});

test('heapSort([3]) should be [3]', () => {
  expect(heapSort([3])).toEqual([3]);
});

test('heapSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11]) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
  expect(heapSort(input)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});
