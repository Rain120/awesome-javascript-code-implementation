/*
 * @Author: Rainy
 * @Date: 2020-01-08 19:20:35
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-08 20:12:31
 */

/**
 * @description: Math.pow
 * @param {number} x
 * @param {number} n pow
 * @return {number}
 */
export function _pow1(x: number, n: number): number {
  if (!n) {
    return 1;
  }
  if (n < 0) {
    return 1 / _pow1(x, -n);
  }
  if (!!(n % 2)) {
    return x * _pow1(x, n - 1);
  }
  return _pow1(x * x, n / 2);
}

export function _pow2(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let pow = 1;
  while (!!n) {
    // n % 2
    if (n & 1) {
      pow *= x;
    }

    x *= x;
    // n = n / 2;
    n >>= 1;
  }

  return pow;
}
