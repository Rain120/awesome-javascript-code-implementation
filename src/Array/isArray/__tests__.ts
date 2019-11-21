/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-21 19:12:43
 */

import { _isArray } from '.';

test('_isArray([]) should true', () => {
    expect(_isArray([])).toBe(true);
});

test('_isArray([1, 2]) should true', () => {
    expect(_isArray([1, 2])).toBe(true);
});

test('_isArray({ a: 1 }) should false', () => {
    expect(_isArray({ a: 1 })).toBe(false);
});

test('_isArray({}) should false', () => {
    expect(_isArray({})).toBe(false);
});

test('_isArray(null) should false', () => {
    expect(_isArray(null)).toBe(false);
});

test('_isArray(undefined) should false', () => {
    expect(_isArray(undefined)).toBe(false);
});
