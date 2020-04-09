/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2020-04-09 18:53:26
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

test('bar call should be callExpect1', () => {
  // @ts-ignore
  expect(bar._call(this, 'Rain120', 23)).toEqual(callExpect1);
});
