/*
 * @Author: Rainy
 * @Date: 2019-12-01 14:25:59
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-07 12:53:01
 */

// import copy from './utils/copy';
import getGitalk from './utils/getGitalk';

export default ({ Vue, options, router, siteData }) => {
  setTimeout(() => {
    try {
      //对document的判断是防止编译的时候报错
      document &&
        (() => {
          getGitalk({ router });
          // copy();
        })();
    } catch (e) {
      console.error(e.message);
    }
  }, 500);
};
