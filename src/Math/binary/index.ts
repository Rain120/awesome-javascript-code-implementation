/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-27 21:57:02
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

export function bitXOR(left: number, right: number): number {
  return left ^ right;
}

