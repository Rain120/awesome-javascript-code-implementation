/*
 * @Author: Rainy
 * @Date: 2019-11-21 19:02:37
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-21 20:12:23
 */

export function isAbsType(target: any): string {
  // [object Object] -> object
  return Object.prototype.toString
    .call(target)
    .split(' ')[1]
    .slice(0, -1)
    .toLowerCase();
}
