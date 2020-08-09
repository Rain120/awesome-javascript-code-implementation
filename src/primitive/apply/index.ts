/*
 * @Author: Rainy
 * @Date: 2020-04-09 19:02:51
 * @LastEditors: Rainy
 * @LastEditTime: 2020-08-08 16:49:24
 */

import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._apply = function(context: ObjectMap<any>, arg: any): any {
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
