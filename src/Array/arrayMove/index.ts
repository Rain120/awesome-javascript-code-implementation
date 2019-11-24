/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 20:11:42
 */

import { AnyArrayMap } from '../../types';

export function arrayMove(array: AnyArrayMap, from: number, to: number): AnyArrayMap {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
