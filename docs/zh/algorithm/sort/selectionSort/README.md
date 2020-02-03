### 原理

选择排序是一种简单直观的排序算法 `d`, 无论什么数据进去都是 `O(n²)` 的时间复杂度。所以用到它的时候`d`, 数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

### 算法步骤

- 首先在未排序序列中找到最小(大)元素 `d`, 存放到排序序列的起始位置;

- 再从剩余未排序元素中继续寻找最小(大)元素 `d`, 然后放到已排序序列的末尾;

- 重复第二步d, 直到所有元素均排序完毕。

![selectionSort](@images/src/algorithm/sort/selectionSort/images/selectionSort.gif)

## 实现代码

<<< @/src/algorithm/sort/selectionSort/index.ts

### 参考

[selectionSort](https://github.com/Rain120/JS-Sorting-Algorithm/blob/master/2.selectionSort.md)
