## 解题思路 or 实现原理

归并排序(`Merge sort`)是建立在归并操作上的一种有效的排序算法。该算法是采用分治法(`Divide and Conquer`)的一个非常典型的应用。

作为一种典型的分而治之思想的算法应用, 归并排序的实现由两种方法:

- 自上而下的递归

- 自下而上的迭代

## 算法步骤

- 申请空间, 使其大小为两个已经排序序列之和, 该空间用来存放合并后的序列;

- 设定两个指针, 最初位置分别为两个已经排序序列的起始位置;

- 比较两个指针所指向的元素, 选择相对小的元素放入到合并空间, 并移动指针到下一位置;

- 重复步骤 3 直到某一指针达到序列尾;

- 将另一序列剩下的所有元素直接复制到合并序列尾。

![mergeSort](~@images/src/algorithms/sort/mergeSort/images/mergeSort.gif)

## 实现代码

<<< @/src/algorithms/sort/mergeSort/index.ts

## 参考

[mergeSort](https://github.com/Rain120/JS-Sorting-Algorithm/blob/master/5.mergeSort.md)
