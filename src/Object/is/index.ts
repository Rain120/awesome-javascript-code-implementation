/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-02 19:18:50
 */
export function _is(source: any, target: any): boolean {
  if (source === target) {
    return source !== 0 || 1 / source === 1 / target;
  } else {
    return source !== source && target !== target;
  }
}
