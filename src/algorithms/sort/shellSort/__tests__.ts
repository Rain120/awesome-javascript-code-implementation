/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 10:51:21
 */

import { shellSort } from '../shellSort';
import { NumberArrayMap } from 'types';

const input: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

test('shellSort([]) should be []', () => {
  expect(shellSort([])).toEqual([]);
});

test('shellSort([3]) should be [3]', () => {
  expect(shellSort([3])).toEqual([3]);
});

test('shellSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11], 5) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
  expect(shellSort(input, 5)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});
