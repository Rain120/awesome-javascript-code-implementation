/*
* @Author: Rainy
* @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 18:46:38
*/

import { quickSort } from '.';
import { NumberArrayMap } from '../../../types';

const input: NumberArrayMap = [3, 2, 1, 2, 3, 21, 123, 312, 123, 11];

test('quickSort([]) should be []', () => {
    expect(quickSort([])).toEqual([]);
});

test('quickSort([3]) should be [3]', () => {
    expect(quickSort([3])).toEqual([3]);
});

test('quickSort([3, 2, 1, 2, 3, 21, 123, 312, 123, 11]) should be [1, 2, 2, 3, 3, 11, 21, 123, 123, 312]', () => {
    expect(quickSort(input)).toEqual([1, 2, 2, 3, 3, 11, 21, 123, 123, 312]);
});
