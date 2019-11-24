/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-22 16:26:40
 */

import { arrayMove } from '.';

const input = ['a', 'b', 'c', 'd', 'e', 'f'];

test(`arrayMove(['a', 'b', 'c', 'd', 'e', 'f'], -1, 0)should be ['f', 'a', 'b', 'c', 'd', 'e']`, () => {
    expect(arrayMove(input, -1, 0)).toEqual(['f', 'a', 'b', 'c', 'd', 'e']);
});

test(`arrayMove(['a', 'b', 'c', 'd', 'e', 'f'], -1, 2) should be ['a', 'b', 'f', 'c', 'd', 'e']`, () => {
    expect(arrayMove(input, -1, 2)).toEqual(['a', 'b', 'f', 'c', 'd', 'e']);
});

test(`arrayMove(['a', 'b', 'c', 'd', 'e', 'f'], -1, 2) should be ['a', 'b', 'f', 'c', 'd', 'e']`, () => {
    expect(arrayMove(input, -1, 2)).toEqual(['a', 'b', 'f', 'c', 'd', 'e']);
});

test(`arrayMove(['a', 'b', 'c', 'd', 'e', 'f'], -1, -3) should be ['a', 'b', 'c', 'f', 'd', 'e']`, () => {
    expect(arrayMove(input, -1, -3)).toEqual(['a', 'b', 'c', 'f', 'd', 'e']);
});

test(`arrayMove(['a', 'b', 'c', 'd', 'e', 'f'], 1, 3) should be ['a', 'c', 'd', 'b', 'e', 'f']`, () => {
    expect(arrayMove(input, 1, 3)).toEqual(['a', 'c', 'd', 'b', 'e', 'f']);
});
