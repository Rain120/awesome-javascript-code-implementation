/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:01:13
 */

import { bitLeftShift, bitRightShift, bitAnd, bitOr, bitNot, bitXOR } from '.';

// bitLeftShift
test('2 << 1 should be 4', () => {
  expect(bitLeftShift(2, 1)).toEqual(4);
});

test('2 << 2 should be 8', () => {
  expect(bitLeftShift(2, 2)).toEqual(8);
});

// bitRightShift
test('2 >> 1 should be 1', () => {
  expect(bitRightShift(2, 1)).toEqual(1);
});

test('2 >> 2 should be 0', () => {
  expect(bitRightShift(2, 2)).toEqual(0);
});

// bitAnd
test('0 & 1 should be 0', () => {
  expect(bitAnd(0, 1)).toEqual(0);
});

test('1 & 0 should be 0', () => {
  expect(bitAnd(1, 0)).toEqual(0);
});

test('1 & 1 should be 1', () => {
  expect(bitAnd(1, 1)).toEqual(1);
});

// bitOr
test('0 | 1 should be 1', () => {
  expect(bitOr(0, 1)).toEqual(1);
});

test('1 | 0 should be 1', () => {
  expect(bitOr(1, 0)).toEqual(1);
});

test('1 | 1 should be 1', () => {
  expect(bitOr(1, 1)).toEqual(1);
});

test('0 ^ 0 should be 0', () => {
  expect(bitOr(0, 0)).toEqual(0);
});

// bitNot
test('~1 should be -2', () => {
  expect(bitNot(1)).toBe(-2);
});
test('~2 should be -3', () => {
  expect(bitNot(2)).toBe(-3);
});

// bitXOR
test('0 ^ 1 should be 0', () => {
  expect(bitXOR(0, 1)).toEqual(1);
});

test('1 ^ 0 should be 0', () => {
  expect(bitXOR(1, 0)).toEqual(1);
});

test('0 ^ 0 should be 0', () => {
  expect(bitXOR(0, 0)).toEqual(0);
});

test('1 ^ 1 should be 1', () => {
  expect(bitXOR(1, 1)).toEqual(0);
});
