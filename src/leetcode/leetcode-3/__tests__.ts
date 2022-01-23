/*
 * @Author: Rainy
 * @Date: 2020-02-06 19:05:18
 * @LastEditors: Rainy
 * @LastEditTime: 2022-01-23 16:08:25
 */

import { lengthOfLongestSubstring } from '.';

test('Test lengthOfLongestSubstring', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  expect(lengthOfLongestSubstring('')).toBe(0);
});
