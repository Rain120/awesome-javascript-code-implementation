/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:03:03
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-14 20:51:41
 */

export function _instanceof(left: any, right: any): boolean {
    const rt = right.prototype;
    let lt = left.__proto__; 
    while(true) {
        if (lt === null) {
            return false;
        }
        if (lt === rt) {
            return true;
        }
        lt = lt.__proto__;
    }
}
