/*
 * @Author: Rainy
 * @Date: 2019-12-01 14:25:59
 * @LastEditors: Rainy
 * @LastEditTime: 2020-02-23 15:03:18
 */

// import copy from './utils/copy';

export default ({ Vue, options, router, siteData, isServer }) => {
  setTimeout(() => {
    try {
      //对document的判断是防止编译的时候报错
      document &&
        (() => {
          // copy();
        })();
    } catch (e) {
      console.error(e.message);
    }
  }, 500);
};
