### 解题思路 or 实现原理

调用一个具有给定 `this` 值的函数, 以及作为一个数组(或类似数组对象)提供的参数。

- 首先 `context` 为可选参数, 如果不传的话默认上下文为 `window`

- 接下来给 `context` 创建一个 `fn` 属性, 并将值设置为需要调用的函数

- 因为 `apply` 可以传入多个参数作为调用函数的参数, 所以需要将参数剥离出来

- 然后调用函数并将对象上的函数删除

注意: `call()` 方法的作用和 `apply()` 方法类似, 区别就是 `call()` 方法接受的是参数列表, 而 `apply()` 方法接受的是一个参数数组。

### 参考

[apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
