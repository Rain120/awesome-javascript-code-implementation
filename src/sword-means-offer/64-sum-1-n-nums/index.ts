/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2020-07-28 15:42:46
 */

/**
 * @param {number} n
 * @return {number}
 */
export function sumNums_1(n: number): number {
  return n && (n + sumNums_1(--n));
};

export function sumNums_2(n: number): number {
  // (n + 1) * n / 2 => (n ^ 2 + n) / 2
  return (n ** 2 + n) >> 1;
};

