### 题目描述

求 `1 + 2 + ... + n` , 要求 **不能使用** `乘除法`, `for`, `while`, `if`, `else`, `switch`, `case` 等关键字及条件判断语句 `(A ? B : C)` 。
 

示例 1:

```
输入: n = 3
输出: 6
```

示例 2:
```
输入: n = 9
输出: 45
```

限制:

1 <= n <= 10000

来源: [力扣 (LeetCode)](https://leetcode-cn.com/problems/qiu-12n-lcof)

## 解题思路 or 实现原理

我们小学就学过 `1 + 2 + ... + n` 的结果就是 $ sum = \frac{(1 + n) * n}{2} $, 但是由于题目限定, 我们不能使用常规方法, 所以我们可以通过 **短路递归** 和 **幂运算移位** 来计算出结果。

## 实现代码

<<< @/src/sword-means-offer/64-sum-1-n-nums/index.ts
