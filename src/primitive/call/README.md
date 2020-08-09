### 解题思路 or 实现原理

使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

#### 原理

- 首先 `context` 为可选参数，如果不传的话默认上下文为 `window`

- 接下来给 `context` 创建一个 `fn` 属性，并将值设置为需要调用的函数

- 因为 `call` 可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来

- 然后调用函数并将对象上的函数删除


### 参考

[call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
