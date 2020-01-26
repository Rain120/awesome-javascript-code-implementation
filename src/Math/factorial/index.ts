/*
 * @Author: Rainy
 * @Date: 2020-01-26 14:03:24
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-26 14:27:27
 */
export function factorial(num: number): number {
  let result = 1;

  for (let i = 2; i <= num; i += 1) {
    result *= i;
  }

  // let count = 1;

  // while(count++ < num) {
  //   result *= count;
  // }

  return result;
}

export function factorialRecursive(num: number): number {
  return num > 1 ? num * factorialRecursive(num - 1) : 1;
}
