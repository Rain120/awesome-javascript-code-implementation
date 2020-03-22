## 原理

### 常规 DOM 渲染

![layout-paint.png](~@images/src/vdom-diff/images/layout-paint.png)

我们知道目前所有的浏览器都是遵循类似上面图片所绘制出的工作流, 仅在细节处略有不同。

- 创建`DOM树`

  一旦浏览器接收到一个`HTML`文件, 渲染引擎 `(render engine)` 就开始解析它, 并根据 HTML 元素 (elements)一一对应地生成`DOM节点 (nodes)`, 组成一棵`DOM树`。

- 创建渲染树

  同时, 浏览器也会解析来自外部`CSS文件`和元素上的`inline`样式。通常浏览器会为这些样式信息, 连同包含样式信息的`DOM树`上的节点, 再创建另外一个树, 一般被称作渲染树 `(render tree)`

- 创建渲染树背后的故事

  `WebKit`内核的浏览器上, 处理一个节点的样式的过程称为`attachment`。`DOM树`上的每个节点都有一个`attach`方法, 它接收计算好的样式信息, 返回一个`render`对象 (又名`renderer`)

  `Attachment` 的过程是同步的, 新节点插入 `DOM树`时, 会调用新节点的`attach`方法。
  构建渲染树时, 由于包含了这些 render 对象, 每个 render 对象都需要计算视觉属性 `(visual properties)`; 这个过程通过计算每个元素的样式属性来完成。

- 布局 `Layout`
  又被简称为`Reflow`
  构造了渲染树以后, 浏览器引擎开始着手布局 `(layout)`。布局时, 渲染树上的每个节点根据其在屏幕上应该出现的精确位置, 分配一组屏幕坐标值。
- 绘制 `Painting`

  接着, 浏览器将会通过遍历渲染树, 调用每个节点的 `paint` 方法来绘制这些 `render` 对象。`paint` 方法根据浏览器平台, 使用不同的 `UI后端API` `(agnostic UI backend API)`。 通过绘制, 最终将在屏幕上展示内容。

`DOM操作` 真正的问题在于每次操作都会触发布局的改变、`DOM树` 的修改和渲染。`Virtual DOM`把管理 `DOM碎片`这件事情自动化、抽象化了, 使得你无需再去手动处理。

### 什么是 Virtual DOM？

`Virtual DOM`是对`DOM`的抽象, 本质上是`JavaScript`对象, 这个对象就是更加轻量级的对`DOM`的描述.

### 传统的 diff 算法 和 React 的 diff 算法

- 传统 `diff` 算法的复杂度为`O(n^3)`

- `React diff`算法的复杂度为`O(n)`

### 先序深度遍历

- 先中后序遍历 -> 遍历根节点的顺序

  - `先序 -> 根, 左, 右`

  - `中序 -> 左, 根, 右`

  - `后序 -> 左, 右, 根`

- 深度(DFS)遍历 -> 从根节点出发, 沿着左子树方向进行纵向遍历, 直到找到叶子节点为止。然后回溯到前一个节点, 进行右子树节点的遍历, 直到遍历完所有可达节点为止。

- 广度(BFS)遍历 -> 从根节点出发, 在横向遍历二叉树层段节点的基础上纵向遍历二叉树的层次。

![dom-diff-alogrithm.png](~@images/src/vdom-diff/images/dom-diff-alogrithm.png)

### DOM Diff 算法策略

![dom-diff-algorithm.svg](~@images/src/vdom-diff/images/dom-diff-algorithm.svg)

### Mini Diff 算法实现

- 替换
  - 节点替换
  - 属性替换
  - 文本替换
  - 更多尚未实现

- 移除
  - 节点移除
  - 属性移除
  - 文本移除
  - 更多尚未实现

### Dom Diff 流程

![dom-dff.png](~@images/src/vdom-diff/images/dom-dff.png)

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

### Diff 相关

[Diff Strategies](https://neil.fraser.name/writing/diff/)

[React Diffing 算法](https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

[React's diff algorithm - Christopher Chedeau](https://calendar.perfplanet.com/2013/diff/)

[React Dom Diff](https://sekaiamber.github.io/react-dom-diff/)

[Under-the-hood-ReactJS](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS)

[babel-plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx/)

[diff 算法原理概述](https://github.com/NervJS/nerv/issues/3)

[React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)

### Virtual DOM 相关

[snabbdom](https://github.com/snabbdom/snabbdom/blob/master/src/snabbdom.ts)

[How to write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)

[Mini Virtual DOM 实现](https://github.com/yelouafi/petit-dom)

[virtual-dom](https://github.com/Matt-Esch/virtual-dom)

[解析 snabbdom 源码](https://github.com/creeperyang/blog/issues/33)

[为什么要使用 Virtual DOM](https://hashnode.com/post/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-cisczhfj41bmssp53mvfwmgrq) -> [中文版](https://www.zcfy.cc/article/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-hashnode-1211.html)

[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
