/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:02:34
 */

import '.';

function bar(name: string, age: number): object {
  return {
    name,
    age
  };
}

const callExpect1 = {
  name: 'Rain120',
  age: 23
};

test('bar call should callExpect1', () => {
  // @ts-ignore
  expect(bar._call(this, 'Rain120', 23)).toEqual(callExpect1);
});
