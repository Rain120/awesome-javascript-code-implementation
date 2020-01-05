/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-29 11:09:21
 */

import { isAbsType } from '../../utils/type';

export function _isArray(target: any): boolean {
  return isAbsType(target).toLowerCase() === 'array';
}
