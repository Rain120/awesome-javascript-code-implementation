### 解题思路 or 实现原理

调用一个具有给定 `this` 值的函数，以及作为一个数组(或类似数组对象)提供的参数。

::: warning
注意: `call()` 方法的作用和 `apply()` 方法类似，区别就是 `call()` 方法接受的是参数列表，而 `apply()` 方法接受的是一个参数数组。
:::

## 实现代码

<<< @/src/primitive/apply/index.ts

## 参考

[apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)