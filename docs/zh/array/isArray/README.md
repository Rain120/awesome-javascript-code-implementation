## 解题思路 or 实现原理

使用 `Object.prototype.toString` 取得对象的一个内部属性 `[[Class]]`，然后依据这个属性，返回 `'[object Array]'` 字符串作为结果(`ECMA`标准中使用`[[]]`来表示语言内部用到的、外部不可直接访问的属性，称为`内部属性`)。利用这 个方法，再配合 `call`，我们可以取得任何对象的内部属性 `[[Class]]`，然后把类型检测转化为字符串比较，以达到我们的目的。

## 实现代码

<<< @/src/Array/isArray/index.ts

## 参考

[绝对准确地确定JavaScript对象是否为数组](http://web.mit.edu/jwalden/www/isArray.html)
