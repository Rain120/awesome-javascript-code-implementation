/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:00:19
 */

import { bubbleSort } from '.';
import { BaseArrayMap } from 'types';

const input: BaseArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

const inputString: BaseArrayMap = ['d', 'a', 'd', 'rain120', 'r', 'c'];

test('bubbleSort([]) should be []', () => {
  expect(bubbleSort([])).toEqual([]);
});

test('bubbleSort([3]) should be [3]', () => {
  expect(bubbleSort([3])).toEqual([3]);
});

test('bubbleSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11]) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
  expect(bubbleSort(input)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});

test(`bubbleSort(['d', 'a', 'd', 'rain120', 'r', 'c']) should be ['a', 'c', 'd', 'd', 'r', 'rain120']`, () => {
  expect(bubbleSort(inputString)).toEqual(['a', 'c', 'd', 'd', 'r', 'rain120']);
});
