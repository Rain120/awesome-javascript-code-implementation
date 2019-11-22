/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-22 11:19:18
 */

import { ObjectMap } from '../types/index';

// @ts-ignore
Function.prototype._call = function(context: ObjectMap<any>, ...arg: any): any {
  context.fn = this;
  return context.fn(...arg);
};
