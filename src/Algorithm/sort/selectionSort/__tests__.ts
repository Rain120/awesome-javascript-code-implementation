/*
* @Author: Rainy
* @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 18:49:07
*/

import { selectionSort } from '.';
import { BaseArrayMap } from '../../../types';

const input: BaseArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

const inputString: BaseArrayMap = ['d', 'a', 'd', 'rain120', 'r', 'c'];

test('selectionSort([]) should be []', () => {
    expect(selectionSort([])).toEqual([]);
});

test('selectionSort([3]) should be [3]', () => {
    expect(selectionSort([3])).toEqual([3]);
});

test('selectionSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11]) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
    expect(selectionSort(input)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});

test(`selectionSort(['d', 'a', 'd', 'rain120', 'r', 'c']) should be ['a', 'c', 'd', 'd', 'r', 'rain120']`, () => {
    expect(selectionSort(inputString)).toEqual(['a', 'c', 'd', 'd', 'r', 'rain120']);
});
