/*
 * @Author: Rainy
 * @Date: 2019-12-29 10:44:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-29 11:25:32
 */

import { baseFindIndex } from '../baseFindIndex';

const input: any = [1, 2, 3, 3, 4, 5, 6, 7];

const inputString: any = ['a', 'b', 'c'];

test(`baseFindIndex(${input}, (item: any, index: number, array: any[]) => {
    return item > 3;
  }) should be 3`, () => {
  expect(
    baseFindIndex(
      input,
      (item: any, index: number, array: any[]) => {
        return item > 3;
      }
    )).toEqual(4);
});

test(`baseFindIndex(${input}, (item: any, index: number, array: any[]) => {
    return item > 2;
  }) should be 2`, () => {
  expect(
    baseFindIndex(
      input,
      (item: any, index: number, array: any[]) => {
        return item > 2;
      }
    )).toEqual(2);
});

test(`baseFindIndex(${input}, (item: any, index: number, array: any[]) => {
  return item > 2;
}, 0) should be 2`, () => {
expect(
  baseFindIndex(
    input,
    (item: any, index: number, array: any[]) => {
      return item > 2;
    },
    0
  )).toEqual(2);
});

test(`baseFindIndex(${input}, (item: any, index: number, array: any[]) => {
  return item > 2;
}, 4, 4) should be 4`, () => {
expect(
  baseFindIndex(
    input,
    (item: any, index: number, array: any[]) => {
      return item > 2;
    },
    4,
    4
  )).toEqual(4);
});

test(`baseFindIndex(${inputString}, (item: any, index: number, array: any[]) => {
    return item === 'a';
  }) should be 0`, () => {
  expect(
    baseFindIndex(
        inputString,
      (item: any, index: number, array: any[]) => {
        return item === 'a';
      }
    )).toEqual(0);
});


test(`baseFindIndex(${inputString}, (item: any, index: number, array: any[]) => {
    return item === 'd';
  }) should be 0`, () => {
  expect(
    baseFindIndex(
        inputString,
      (item: any, index: number, array: any[]) => {
        return item === 'd';
      }
    )).toEqual(-1);
});
