/*
* @Author: Rainy
* @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-23 11:35:29
*/

import { BaseArrayMap } from '../../types';

export function bubbleSort(arr: BaseArrayMap): BaseArrayMap {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
