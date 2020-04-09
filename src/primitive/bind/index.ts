/*
 * @Author: Rainy
 * @Date: 2020-04-09 19:02:51
 * @LastEditors: Rainy
 * @LastEditTime: 2020-04-09 19:33:41
 */

import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._bind = function(context: ObjectMap<any>, ...args: any): any {
  /* istanbul ignore next */
  if (typeof this !== 'function') {
    throw new TypeError('Bind must be called with a function');
  }

  const _context = this;
  
  const fb = function() {
    // @ts-ignore
    _context.apply(this instanceof fb ? this : context, args.concat(Array.prototype.slice.call(arguments)));
  };

  fb.prototype = Object.create(_context.prototype);

  return fb;
};
