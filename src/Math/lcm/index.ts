/*
 * @Author: Rainy
 * @Date: 2020-01-31 12:33:43
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-31 13:25:56
 */

import { gcd_optimal } from '../gcd';

// the least common multiple
export function lcm(a: number, b: number): number {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / gcd_optimal(a, b);
}
