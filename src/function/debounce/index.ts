/*
 * @Author: Rainy
 * @Date: 2020-01-02 18:29:32
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-01-02 19:57:51
 */

import { WithParamsReturnAnyFunction, ObjectMap } from 'types';
import { isAbsType } from 'utils/type';

export function _debounce(
  callback: WithParamsReturnAnyFunction,
  wait: number = 300,
  options: ObjectMap<any> = {},
): WithParamsReturnAnyFunction {
  let timer: any = null;
  let result: any = null;

  if (!isAbsType(options)) {
    throw new Error('options must be object');
  }

  const { leading = false, trailing = false, ...option } = options;

  const debounce = () => {
    const params = arguments;
    if (!!timer) {
      clearTimeout(timer);
    }

    if (leading) {
      timer = setTimeout(() => {
        timer = null;
      }, wait);

      // @ts-ignore
      result = !timer && callback && callback.apply(this, params);
    } else {
      timer = setTimeout(() => {
        // @ts-ignore
        result = callback && callback.apply(this, params);
      }, wait);
    }
  }

  debounce.cancel = () => {
    clearTimeout(timer);
    timer = null;
  }

  return debounce;
}
