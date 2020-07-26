/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2020-07-26 10:52:46
 */

import { ObjectMap } from "types";

/**
 * @param {number[]} nums
 * @return {number}
 */
export function findRepeatNumber_1(nums: number[]): number | undefined {
    const map: ObjectMap<boolean> = {};
    for (const num of nums) {
        if (!map[num]) {
            map[num] = true;
        } else {
            return num;
        }
    }
}

export function findRepeatNumber_2(nums: number[]): number | undefined {
    let num: number;
    for (let index = 0; index < nums.length; index++) {
        while ((num = nums[index]) !== index) {
            if (num === nums[num]) {
                return num;
            }

            [nums[num], nums[index]] = [nums[index], nums[num]];
        }
    }
}
