/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2020-04-09 19:00:57
 */

import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._call = function(context: ObjectMap<any>, ...arg: any): any {
  /* istanbul ignore next */
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  /* istanbul ignore next */
  context = context ? Object(context) : window

  context.fn = this;

  const result = context.fn(...arg);

  delete context.fn;

  return result;
};
