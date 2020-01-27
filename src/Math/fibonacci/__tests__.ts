/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-27 14:10:18
 */

import { fibonacci } from '.';

test('fibonacci(1) should be [1]', () => {
  expect(fibonacci(1)).toEqual([1]);
});

test('fibonacci(5) should be [1, 1, 2, 3, 5]', () => {
  expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
});

