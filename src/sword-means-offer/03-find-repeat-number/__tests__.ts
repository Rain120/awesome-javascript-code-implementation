/*
 * @Author: Rainy
 * @Date: 2020-02-06 19:05:18
 * @LastEditors: Rainy
 * @LastEditTime: 2020-07-26 10:54:08
 */

import { findRepeatNumber_1, findRepeatNumber_2 } from '.';

test('Test findRepeatNumber from [2, 3, 1, 0, 2, 5, 3] maybe 2 or 3', () => {
  expect(findRepeatNumber_1([2, 3, 1, 0, 2, 5, 3])).toEqual(2 || 3);
});

test('Test findRepeatNumber from [2, 3, 1, 0, 2, 5, 3] maybe 2 or 3', () => {
  expect(findRepeatNumber_1([1, 3, 2, 3])).toEqual(3);
});

test('Test findRepeatNumber from [2, 3, 1, 0, 2, 5, 3] maybe 2 or 3', () => {
  expect(findRepeatNumber_2([2, 3, 1, 0, 2, 5, 3])).toEqual(2 || 3);
});

test('Test findRepeatNumber from [2, 3, 1, 0, 2, 5, 3] maybe 2 or 3', () => {
  expect(findRepeatNumber_2([1, 3, 2, 3])).toEqual(3);
});
