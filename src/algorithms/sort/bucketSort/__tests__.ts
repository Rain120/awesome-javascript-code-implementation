/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:55:08
 */

import { radixSort } from '../bucketSort';
import { NumberArrayMap } from 'types';

const input: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];
const input2: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 12345, 2222, 111, 11];

test('radixSort([], 0) should be []', () => {
  expect(radixSort([], 0)).toEqual([]);
});

test('radixSort([3], 1) should be [3]', () => {
  expect(radixSort([3], 1)).toEqual([3]);
});

test('radixSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11], 3) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
  expect(radixSort(input, 3)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});

test(`radixSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 12345, 2222, 111, 11], 5)
    should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312, 2222, 12345]`, () => {
  expect(radixSort(input2, 5)).toEqual([1, 2, 2, 3, 3, 11, 21, 111, 123, 123, 312, 2222, 12345]);
});
