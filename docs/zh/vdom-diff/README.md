## 原理



### 先序深度遍历

- 先中后序遍历 -> 遍历根节点的顺序

    - 先序 -> 根, 左, 右

    - 中序 -> 左, 根, 右

    - 后序 -> 左, 右, 根

- 深度(DFS)遍历 -> 从根节点出发, 沿着左子树方向进行纵向遍历, 直到找到叶子节点为止。然后回溯到前一个节点, 进行右子树节点的遍历, 直到遍历完所有可达节点为止。

- 广度(BFS)遍历 -> 从根节点出发, 在横向遍历二叉树层段节点的基础上纵向遍历二叉树的层次。

![dom-diff-alogrithm.png](~@images/src/vdom-diff/images/dom-diff-alogrithm.png)

## Demo

[Link](https://rain120.github.io/vdom-diff-algorithm/)

<iframe name='demo' src='https://rain120.github.io/vdom-diff-algorithm/' width="100%" height="500px" frameborder="0" />

## 实现代码

[Link](https://github.com/Rain120/vdom-diff-algorithm/tree/master/src)

**index.d.ts**

<<< @/src/vdom-diff/src/index.d.ts

**utils.ts**

<<< @/src/vdom-diff/src/utils.ts

**render.js**

<<< @/src/vdom-diff/src/render.js

**diff.ts**

<<< @/src/vdom-diff/src/diff.ts

**patch.ts**

<<< @/src/vdom-diff/src/patch.ts


## 参考

[React Diffing 算法](https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

[React's diff algorithm - Christopher Chedeau](https://calendar.perfplanet.com/2013/diff/)

[React Dom Diff](https://sekaiamber.github.io/react-dom-diff/)

[virtual-dom](https://github.com/Matt-Esch/virtual-dom)

[How to write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)

[Under-the-hood-ReactJS](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS)

[babel-plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx/)
