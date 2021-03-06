## 解题思路 or 实现原理

基数排序是一种非比较型整数排序算法, 其原理是将整数按位数切割成不同的数字, 然后按每个位数分别比较。由于整数也可以表达字符串(比如名字或日期)和特定格式的浮点数, 所以基数排序也不是只能使用于整数。

## 算法步骤

基数排序有两种方法: 

这三种排序算法都利用了桶的概念, 但对桶的使用方法上有明显差异: 

- 基数排序: 根据键值的每位数字来分配桶;
- 计数排序: 每个桶只存储单一键值;
- 桶排序: 每个桶存储一定范围的数值;

![radixSort](~@images/src/algorithms/sort/radixSort/images/radixSort.gif)

## 实现代码

<<< @/src/algorithms/sort/radixSort/index.ts

## 参考

[radixSort](https://github.com/Rain120/JS-Sorting-Algorithm/blob/master/10.radixSort.md)
