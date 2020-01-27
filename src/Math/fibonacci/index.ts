/*
 * @Author: Rainy
 * @Date: 2020-01-27 13:38:10
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-27 14:11:53
 */

import { NumberArrayMap } from 'types';

export function fibonacci(n: number): NumberArrayMap {
  const fibSequence: NumberArrayMap = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  let counter = n - 1;

  while (counter--) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    fibSequence.push(currentValue);
  }

  return fibSequence;
}
