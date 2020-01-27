/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-02 20:28:56
 */

import { _is } from '.';

test(`is('foo', 'foo') should be true`, () => {
  expect(_is('foo', 'foo')).toBe(true);
});

test(`is([], []) should be false`, () => {
  expect(_is([], [])).toBe(false);
});

const u1 = { name: 'Rain120' };
const u2 = { name: 'Rain120' };

test(`is(u1, u1) should be true`, () => {
  expect(_is(u1, u1)).toBe(true);
});

test(`is(u1, u2) should be false`, () => {
  expect(_is(u1, u2)).toBe(false);
});

test(`is(null, null) should be true`, () => {
  expect(_is(null, null)).toBe(true);
});

test(`is(0, -0) should be false`, () => {
  expect(_is(0, -0)).toBe(false);
});

test(`is(0, +0) should be true`, () => {
  expect(_is(0, +0)).toBe(true);
});


test(`is(NaN, 0 / 0) should be true`, () => {
  expect(_is(NaN, 0 / 0)).toBe(true);
});
