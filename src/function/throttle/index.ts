/*
 * @Author: Rainy
 * @Date: 2020-01-02 18:31:50
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-02 19:58:10
 */

import { WithParamsReturnAnyFunction, ObjectMap } from 'types';
import { isAbsType } from 'utils/type';

export function _throttle(
  callback: WithParamsReturnAnyFunction,
  wait: number = 300,
  options: ObjectMap<any> = {},
): WithParamsReturnAnyFunction {
  let last: number = 0;
  let timer: any = null;
  let result: any = null;

  if (!isAbsType(options)) {
    throw new Error('options must be object');
  }

  const { leading = false, trailing = false, ...option } = options;

  const throttle = () => {
    let params: any = arguments
    let now = +new Date();

    if (leading) {
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      // @ts-ignore
      result = !timer && callback && callback.apply(this, params);
    } else {
      if (last && now < last + wait) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          last = now;

          // @ts-ignore
          result = callback && callback.apply(this, params)
        }, wait);
      } else {
        last = now;

        // @ts-ignore
        result = callback && callback.apply(this, params)
      }
    }
    return result;
  }

  throttle.cancel = () => {
    clearTimeout(timer);
    timer = null;
  }

  return throttle;
}
