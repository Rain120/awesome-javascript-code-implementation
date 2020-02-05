/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-05 15:58:15
 */

import { _isArray } from '../isArray';
import { ArrayMap, WithParamsFunction } from 'types';

// ours
export function _find(collection: ArrayMap<any>, predicate: WithParamsFunction): any {
    if (!_isArray(collection)) {
        throw new Error('The first parma must be a Array');
    }
    for(const index in collection) {
        if (predicate(collection[index], index, collection)) {
            return collection[index];
        }
    }
    return null;
}

// @ts-ignore
// prototype
Array.prototype._find = function(callback: WithParamsFunction/*, thisArg*/) {
    if (this == null) {
        throw new TypeError('null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback is not a function');
    }
    const oldArr = Object(this);
    const len = oldArr.length >>> 0;
    const thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    let k = 0;

    while(k++ < len) {
        if(k in oldArr) {
            const val = oldArr[k];
            if(callback.call(thisArg, val, k, oldArr)) {
                return val;
            }
        }
    }
    return void 0;
}
