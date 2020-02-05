/*
 * @Author: Rainy
 * @Date: 2020-01-30 11:42:57
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-05 18:32:21
 */

import { lcm } from '.';

test('lcm(5, 10) should be 10', () => {
  expect(lcm(5, 10)).toEqual(10);
});

test('lcm(0, 10) should be 0', () => {
  expect(lcm(0, 10)).toEqual(0);
});

test('lcm(5, 0) should be 0', () => {
  expect(lcm(5, 0)).toEqual(0);
});
