/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2022-01-24 11:43:11
 * @LastEditors: Rainy
 * @LastEditTime: 2022-01-24 11:47:54
 */

export function create(prop: any, options?: Object) {
    if (!['object', 'function'].includes(typeof prop)) {
        throw new TypeError(`Invalid property with ${prop}`);
    }

    const Ctor = function() {};

    Ctor.prototype = prop;

    // @ts-ignore
    const obj = new Ctor();

    if (options) {
        // @ts-ignore
        Object.defineProperties(obj, options);
    }

    if (prop === null) {
        obj.__proto__ = null;
    }

    return obj;
}