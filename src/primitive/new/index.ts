/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2022-01-24 11:37:39
 */

export function _new(...arg: any): any {
  // Eg: class Person {} or function Person() {}
  // Person.prototype
  // Person.prototype.constructor === Person
  // person = new Person => person.__proto__ === Person.prototype

  // Array.prototype.shift.call(arg) => [...arg].shift()

  // 1
  // let obj: any = new Object();
  // 2
  // obj.__proto__ = _constructor.prototype;
  // 1 2
  const _constructor = Array.prototype.shift.call(arg);
  const obj = Object.create(_constructor.prototype);
  // 3
  const result = _constructor.apply(obj, arg);
  // 4
  return typeof result === 'object' && result !== null ? result : obj;
}
