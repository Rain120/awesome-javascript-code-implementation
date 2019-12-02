/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-02 20:02:34
 */

import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._call = function(context: ObjectMap<any>, ...arg: any): any {
  context.fn = this;
  return context.fn(...arg);
};
