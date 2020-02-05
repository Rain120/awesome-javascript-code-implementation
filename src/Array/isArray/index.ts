/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-05 15:50:12
 */

import { isAbsType } from '../../utils/type';

export function _isArray(target: any): boolean {
  return isAbsType(target).toLowerCase() === 'array';
}
