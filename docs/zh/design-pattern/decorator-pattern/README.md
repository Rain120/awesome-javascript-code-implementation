## 装饰器模式

装饰器模式(`Decorator Pattern`)允许向一个现有的对象添加新的功能, 同时又不改变其结构。

装饰器模式属于结构型模式。

## UML 类图

### 传统的 Java 类图

![decorator-pattern.png](@images/src/design-pattern/decorator-pattern/images/decorator-pattern.png)

### JavaScript 类图

![js-decorator-pattern.png](@images/src/design-pattern/decorator-pattern/images/js-decorator-pattern.png)

## 作用

动态地给一个对象添加一些额外的职责。

## 优缺点

### 优点

- 装饰器模式和继承的共同特点就是扩展对象的功能, 而装饰器模式比继承更加灵活。

- 装饰类和被装饰类可以独立发展，不会相互耦合。

### 缺点

- 多层装饰比较复杂。

## 场景

- [Decorator](http://es6.ruanyifeng.com/#docs/decorator)

- [core-decorators.js](https://github.com/jayphelps/core-decorators.js)

## 实现代码

<<< @/src/design-pattern/decorator-pattern/index.ts

## 参考

[装饰器模式](https://zh.wikipedia.org/wiki/%E4%BF%AE%E9%A5%B0%E6%A8%A1%E5%BC%8F)