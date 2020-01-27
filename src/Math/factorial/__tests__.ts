/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-26 14:24:36
 */

import { factorial, factorialRecursive } from '.';

test('factorial(5) should be 120', () => {
  expect(factorial(5)).toEqual(120);
});

test('factorialRecursive(5) should be 120', () => {
  expect(factorialRecursive(5)).toEqual(120);
});
