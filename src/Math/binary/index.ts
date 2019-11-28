/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-28 18:46:02
 */
export function bitLeftShift(val: number, bit: number): number {
  return val << bit;
}

export function bitRightShift(val: number, bit: number): number {
  return val >> bit;
}

export function bitAnd(left: number, right: number): number {
  return left & right;
}

export function bitOr(left: number, right: number): number {
  return left | right;
}

export function bitNot(val: number): number {
  return ~val;
}

export function bitXOR(left: number, right: number): number {
  return left ^ right;
}

