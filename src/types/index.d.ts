
/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:55:36
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-24 19:53:52
 */

export class ClassType {}

export type BaseValueType = number | string;

export type BaseArrayMap = BaseValueType[];

export type NumberArrayMap = number[];

export type AnyArrayMap = unknown[];

export type ObjectMap<V> = {
  [name: string]: V;
};
