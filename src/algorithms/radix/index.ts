/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2022-01-24 12:12:01
 * @LastEditors: Rainy
 * @LastEditTime: 2022-01-24 12:18:06
 */

const getNRadix = (n: number) => {
    const radixList = [];
    
    for (let i = 0; i < n; i++) {
        if (i < 10) {
            radixList.push(i);
        } else {
            // A 65 Z 90, a 97 z 122
            // i = 10+ => i + (65 - 10)
            // i = 36+ => i + 62
            const A = 65;
            const Z = 90;
            const a = 97
            const code = i + (A - 10) < Z ? (i + (A - 10)) : i + (a - (Z - 55));
            radixList.push(String.fromCharCode(code));
        }
    }

    return radixList;   
}

function getRadixValue(value: number, radix = 10) {
    if (radix < 1) {
        throw new TypeError(`Invalid with ${radix}`);
    }

    const res = [];
    const radixList = getNRadix(radix);

    while(value) {
        const v = value % radix;

        res.unshift(radixList[v]);

        // @ts-ignore
        value = parseInt(value / radix);
    }

    return res.join('');
}