/*
 * @Author: Rainy
 * @Date: 2020-01-30 11:42:57
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-31 13:28:43
 */

// the greatest common divisor
export function gcd_enumeration(a: number, b: number): number {
  let gcd = 1;

  let smaller = Math.min(a, b);

  for (let i = 2; i <= smaller; i++) {
    if ((a % i === 0) && (b % i === 0)) {
      gcd = i;
    }
  }

  return gcd;
}

export function gcd_division_recursive(a: number, b: number): number {
  if (b === 0) {
    return a;
  }

  return gcd_division_recursive(b , a % b);
}

export function gcd_sub_recursive(a: number, b: number): number {
  if (a === b) {
    return a;
  }

  return a > b ? gcd_sub_recursive(a - b, b) : gcd_sub_recursive(a, b - a);
}

export function gcd_optimal(a: number, b: number): number {
  if (a === b) {
    return a;
  }

  if ((a & 1) === 0 && (b & 1) === 0) {
    return gcd_optimal(a >> 1, b >> 1);
  } else if ((a & 1) === 0 && (b & 1) !== 0) {
    return gcd_optimal(a >> 1, b);
  } else if ((a & 1) !== 0 && (b & 1) === 0) {
    return gcd_optimal(a, b >> 1);
  } else {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return gcd_optimal(max - min, min);
  }
}
