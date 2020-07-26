> 为了不污染原生的 Array 对象, 实现通过 function 来实现

Eg:

```javascript
// prototype
Array.prototype.find = function(predicate, /* thisArg*/) {}

// ours
function (collection, predicate) {}
```

## 解题思路 or 实现原理

`find` 方法对数组中的每一项元素执行一次 `predicate` 函数, 直至有一个 `predicate` 返回 `true`. 当找到了这样一个元素后, 该方法会立即返回这个元素的值, 否则返回 `undefined`. 注意`predicate` 函数会为数组中的每个索引调用即从 0 到 `length - 1`, 而不仅仅是那些被赋值的索引, 这意味着对于稀疏数组来说, 该方法的效率要低于那些只遍历有值的索引的方法.

- 把传入的 `this` 转换成 `Object`对象, 需要`null`值处理 -> `O`

- 取出 `Object`的 `length` -> `len`

- 判断传入 `predicate` 的是否是 `function`, 抛出异常 `TypeError exception`

- 设置计数器 `k = 0`

- `while k < len`
  - `kValue = O[k]`
  - `testResult = predicate(thisArg, kValue, k, O)` -> `Boolean`
  - `testResult is true, return kValue`
  - `Set k to k + 1`
- `Return undefined`

## 参数

- `predicate`

  在数组每一项上执行的函数, 接收 3 个参数:

  - `element`

    当前遍历到的元素

  - `index` 可选

    当前遍历到的索引

  - `array` 可选

    数组本身

- `thisArg` 可选

  执行回调时用作`this`的对象

## 返回值

返回数组中满足提供的测试函数的第一个元素的值. 否则返回 `undefined`

## 实现代码

<<< @/src/Array/find/index.ts

## 参考

[Find MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

[TC39 Find](https://tc39.es/ecma262/#sec-array.prototype.find)
