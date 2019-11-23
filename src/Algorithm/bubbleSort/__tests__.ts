/*
* @Author: Rainy
* @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-23 11:40:44
*/

import { bubbleSort } from '.';
import { BaseArrayMap } from './../../types/index.d';

const input: BaseArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

const inputString: BaseArrayMap = ['d', 'a', 'd', 'rain120', 'r', 'c'];

test('bubbleSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11]) should [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
    expect(bubbleSort(input)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});

test(`bubbleSort(['d', 'a', 'd', 'rain120', 'r', 'c']) should ['a', 'c', 'd', 'd', 'r', 'rain120']`, () => {
    expect(bubbleSort(inputString)).toEqual(['a', 'c', 'd', 'd', 'r', 'rain120']);
});
