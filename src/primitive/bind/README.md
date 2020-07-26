### 解题思路 or 实现原理

创建一个新的函数, 在 `bind()` 被调用时, 这个新函数的 `this` 被指定为 `bind()` 的第一个参数, 而其余参数将作为新函数的参数, 供调用时使用。

特点:

- 改变 `this` 指向

- 返回一个函数

- 可以传入参数

Note:

- `new` 的优先级大于 `bind`, 如果 `bind` 绑定后的函数被 `new`了, `this` 会指向当前函数的实例

- 需要保留 **原函数的原型链** 上的属性和方法

### 参考

[bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)