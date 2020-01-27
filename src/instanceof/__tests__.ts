/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:03:09
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:02:22
 */

import { _instanceof } from '.';

function Foo(): void {}

test('Foo instanceof Foo should be false', () => {
  expect(_instanceof(Foo, Foo)).toBe(false);
});

test('Foo instanceof Object should be true', () => {
  expect(_instanceof(Foo, Object)).toBe(true);
});

test('Object instanceof Object should be true', () => {
  expect(_instanceof(Foo, Object)).toBe(true);
});

test('Function instanceof Function should be true', () => {
  expect(_instanceof(Foo, Function)).toBe(true);
});

test('Function instanceof Object should be true', () => {
  expect(_instanceof(Foo, Object)).toBe(true);
});

test('Foo instanceof Object should be true', () => {
  expect(_instanceof(Foo, Object)).toBe(true);
});

test('Foo instanceof Function should be true', () => {
  expect(_instanceof(Foo, Function)).toBe(true);
});

test('Foo instanceof Function should be true', () => {
  expect(_instanceof(Foo, Function)).toBe(true);
});
