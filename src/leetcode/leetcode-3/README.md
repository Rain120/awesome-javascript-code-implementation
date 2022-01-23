## 题目描述

:::tip
给定一个字符串 s ，请你找出其中不含有重复字符的 **最长子串** 的长度。
[leetcode problems](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
:::

## 解题思路 or 实现原理

使用 set 存储数据，保证唯一性。通过两个指针，i，j，当 !set.has(s[j])，maxLength 增加；否则，在判断set.has(s[i])，删除 set中的 s[j]，指针向后偏移；将当前 s[i] 加入到 set 中

举个例子

第1步
```
maxLength: 0 -> 1
set: [] -> [a]

i j
 |
 v
 a b a b
```

第2步
```
maxLength: 1 -> 2
set: [a] -> [a, b]
i j
 |
 v
 a b a b

 j i
 | |
 v v
 a b a b
```

第3步
```
maxLength: 2
set: [a, b] -> [a, b, a] -> [b, a]

 j   i
 |   |
 v   v
 a b a b

   j i
   | |
   v v
 a b a b
```

第4步
```
maxLength: 2
set: [b, a] -> [b, a, b] -> [a, b]

   j   i
   |   |
   v   v
 a b a b

     j i
     | |
     v v
 a b a b
```

## 参考
