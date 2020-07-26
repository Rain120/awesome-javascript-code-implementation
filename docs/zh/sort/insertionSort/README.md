## 解题思路 or 实现原理

插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列, 对于未排序数据, 在已排序序列中从后向前扫描, 找到相应位置并插入。

## 算法步骤

`n` 个记录的直接选择排序可经过 `n-1` 趟直接选择排序得到有序结果。具体算法描述如下:

- 从第一个元素开始, 该元素可以认为已经被排序;
- 取出下一个元素, 在已经排序的元素序列中从后向前扫描;
- 如果该元素（已排序）大于新元素, 将该元素移到下一位置;
- 重复步骤`3`, 直到找到已排序的元素小于或者等于新元素的位置;
- 将新元素插入到该位置后;
- 重复步骤 `2~5`。

![insertionSort](~@images/src/algorithms/sort/insertionSort/images/insertionSort.gif)

## 实现代码

<<< @/src/algorithms/sort/insertionSort/index.ts

## 参考

[insertionSort](https://github.com/Rain120/JS-Sorting-Algorithm/blob/master/3.insertionSort.md)
