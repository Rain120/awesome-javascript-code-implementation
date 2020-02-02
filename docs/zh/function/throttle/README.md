## 原理

- Lodash

创建一个节流函数, 在 `wait` 秒内最多执行func一次的函数。该函数提供一个 `cancel` 方法取消延迟的函数调用以及 `flush`方法立即调用。

- Ours

规定一个时间 `wait`, `wait` 秒内，将触发的事件合并为一次并执行。

![throttle](@images/src/function/throttle/images/throttle.png)

## 实现代码

<<< @/src/function/throttle/index.ts

## 参考资料

[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
