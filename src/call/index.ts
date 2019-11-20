/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-18 20:01:11
 */

type ObjectMap<V> = {
  [name: string]: V;
};

// @ts-ignore
Function.prototype._call = function(context: ObjectMap<any>, ...arg: any): any {
  context.fn = this;
  return context.fn(...arg);
};
