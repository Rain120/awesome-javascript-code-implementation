
/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:55:36
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-23 11:28:17
 */

export class ClassType {}

export type BaseValueType = number | string;

export type BaseArrayMap = BaseValueType[];

export type ArrayMap = unknown[];

export type ObjectMap<V> = {
  [name: string]: V;
};
