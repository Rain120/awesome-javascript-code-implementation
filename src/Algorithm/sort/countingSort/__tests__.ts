/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:00:12
 */

import { countingSort } from '.';
import { NumberArrayMap } from 'types';

const input: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

test('countingSort([], 1) should be []', () => {
  expect(countingSort([], 1)).toEqual([]);
});

test('countingSort([3], 1) should be [3]', () => {
  expect(countingSort([3], 1)).toEqual([3]);
});

test('countingSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11], 2) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
  expect(countingSort(input, 2)).toEqual([
    1,
    2,
    2,
    2,
    3,
    21,
    123,
    312,
    123,
    11
  ]);
});
