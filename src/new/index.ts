/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-17 22:12:02
 */
export function _new(...arg: any): any {
  // 1
  let obj: any = new Object();
  let _constructor = Array.prototype.shift.call(arg);
  // 2
  obj.__proto__ = _constructor.prototype;
  // 3
  let result = _constructor.apply(obj, arg);
  // 4
  return typeof result === 'object' && result !== null ? result : obj;
}
