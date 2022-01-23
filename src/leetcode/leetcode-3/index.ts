/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2022-01-23 16:07:42
 */

export function lengthOfLongestSubstring(s: string) {
    const set = new Set();
    let maxLength = 0;
    let i = 0;
    let j = 0;

    for(; i < s.length; i++) {
        if (!set.has(s[j])) {
            maxLength++;
        } else {
            while (set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
        }

        set.add(s[i]);
        maxLength = Math.max(maxLength, set.size);
    }

    return maxLength;
};
