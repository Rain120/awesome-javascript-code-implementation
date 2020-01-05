
/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:55:36
 * @LastEditors  : Rainy
 * @LastEditTime : 2019-12-29 11:01:00
 */

export class ClassType {}

// Base
export type BaseValueType = number | string;

export type MixedValueType = number | string | boolean;

// Array
export type BaseArrayMap = BaseValueType[];

export type NumberArrayMap = number[];

export type StringArrayMap = string[];

export type AnyArrayMap = unknown[];

export type ArrayMap<T> = T[];

// Object

export type ObjectMap<V> = {
  [name: string]: V;
};

// Function
export type NullFunction = () => null;

export type AnyFunction = () => any;

export type WithParamsReturnAnyFunction = (...arg: any) => any;

export type BaseFunction = () => BaseValueType;

export type MixedFunction = () => MixedValueType;

export type WithParamsFunction = (...arg: any) => MixedValueType;
