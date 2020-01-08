/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-08 20:09:07
 */

import { _pow1, _pow2 } from '.';

// _pow1
test('_pow1(2, -4) should 1 / 2 ^ 4', () => {
  expect(_pow1(2, -4)).toEqual(Math.pow(2, -4));
});

test('_pow1(2, -1) should 1 / 2', () => {
  expect(_pow1(2, -1)).toEqual(Math.pow(2, -1));
});

test('_pow1(2, 0) should 1', () => {
  expect(_pow1(2, 0)).toEqual(1);
});

test('_pow1(2, 1) should 2', () => {
  expect(_pow1(2, 1)).toEqual(2);
});

test('_pow1(2, 4) should 16', () => {
  expect(_pow1(2, 4)).toEqual(16);
});

// _pow2
test('_pow2(2, -4) should 1 / 2 ^ 4', () => {
  expect(_pow2(2, -4)).toEqual(Math.pow(2, -4));
});

test('_pow2(2, -1) should 1 / 2', () => {
  expect(_pow2(2, -1)).toEqual(Math.pow(2, -1));
});

test('_pow2(2, 0) should 1', () => {
  expect(_pow2(2, 0)).toEqual(1);
});

test('_pow2(2, 1) should 2', () => {
  expect(_pow2(2, 1)).toEqual(2);
});

test('_pow2(2, 4) should 16', () => {
  expect(_pow2(2, 4)).toEqual(16);
});

