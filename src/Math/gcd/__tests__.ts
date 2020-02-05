/*
 * @Author: Rainy
 * @Date: 2020-01-30 11:42:57
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-05 18:34:28
 */

import { gcd_enumeration, gcd_division_recursive, gcd_sub_recursive, gcd_optimal, } from '.';

test('gcd_enumeration(5, 10) should be 5', () => {
  expect(gcd_enumeration(5, 10)).toEqual(5);
});

test('gcd_sub_recursive(5, 5) should be 5', () => {
  expect(gcd_sub_recursive(5, 5)).toEqual(5);
});

test('gcd_division_recursive(5, 10) should be 5', () => {
  expect(gcd_division_recursive(5, 10)).toEqual(5);
});

test('gcd_sub_recursive(10, 5) should be 5', () => {
  expect(gcd_sub_recursive(10, 5)).toEqual(5);
});

test('gcd_sub_recursive(5, 10) should be 5', () => {
  expect(gcd_sub_recursive(5, 10)).toEqual(5);
});

test('gcd_optimal(5, 10) should be 5', () => {
  expect(gcd_optimal(5, 10)).toEqual(5);
});

test('gcd_optimal(20, 10) should be 5', () => {
  expect(gcd_optimal(20, 10)).toEqual(5);
});

test('gcd_optimal(6, 3) should be 3', () => {
  expect(gcd_optimal(6, 3)).toEqual(3);
});

test('gcd_optimal(2, 3) should be 1', () => {
  expect(gcd_optimal(2, 3)).toEqual(1);
});
