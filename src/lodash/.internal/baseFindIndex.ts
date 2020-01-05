/*
 * @Author: Rainy
 * @Date: 2019-12-29 10:29:48
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-29 11:31:44
 */
import { AnyArrayMap, WithParamsReturnAnyFunction } from '../../types';


/**
 * @export
 * @param {AnyArrayMap} array
 * @param {WithParamsReturnAnyFunction} predicate
 * @param {number} fromIndex
 * @param {number} fromRight
 * @returns {number}
 */
export function baseFindIndex(
    array: AnyArrayMap,
    predicate: WithParamsReturnAnyFunction,
    fromIndex: number = 0,
    fromRight?: number
): number {
  const { length } = array;
  let index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? --index : ++index < length)) {
      if (!!predicate(array[index], index, array)) {
        return index;
      }
  }

  return -1;
}
