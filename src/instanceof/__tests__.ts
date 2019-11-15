/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:03:09
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-15 13:48:42
 */

import { _instanceof } from '.';

function Foo(): void {}

test('Foo instanceof Foo should false', () => {
    expect(_instanceof(Foo, Foo)).toBe(false);
});

test('Foo instanceof Object should true', () => {
    expect(_instanceof(Foo, Object)).toBe(true);
});

test('Object instanceof Object true', () => {
    expect(_instanceof(Foo, Object)).toBe(true);
});

test('Function instanceof Function true', () => {
    expect(_instanceof(Foo, Function)).toBe(true);
});

test('Function instanceof Object true', () => {
    expect(_instanceof(Foo, Object)).toBe(true);
});

test('Foo instanceof Object true', () => {
    expect(_instanceof(Foo, Object)).toBe(true);
});

test('Foo instanceof Function true', () => {
    expect(_instanceof(Foo, Function)).toBe(true);
});

test('Foo instanceof Function true', () => {
    expect(_instanceof(Foo, Function)).toBe(true);
});
