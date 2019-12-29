/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-29 11:20:52
 */

import { bucketSort } from '.';
import { NumberArrayMap } from 'types';

const input: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];
const input2: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 12345, 2222, 111, 11];


test('bucketSort([]) should be []', () => {
  expect(bucketSort([])).toEqual([]);
});

test('bucketSort([], 0) should be []', () => {
  expect(bucketSort([], 0)).toEqual([]);
});

test('bucketSort([3], 1) should be [3]', () => {
  expect(bucketSort([3])).toEqual([3]);
});

test('bucketSort([3], 1) should be [3]', () => {
  expect(bucketSort([3], 1)).toEqual([3]);
});

test('bucketSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11], 3) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
  expect(bucketSort(input, 3)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});

test(`bucketSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 12345, 2222, 111, 11], 5)
    should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312, 2222, 12345]`, () => {
  expect(bucketSort(input2, 5)).toEqual([1, 2, 2, 3, 3, 11, 21, 111, 123, 123, 312, 2222, 12345]);
});
