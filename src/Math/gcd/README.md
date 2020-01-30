### 最大公约数

#### 定义

能够整除多个整数的最大正整数。而多个整数不能都为零。

求两个整数最大公约数主要的方法: 

- [穷举法](https://zh.wikipedia.org/wiki/%E7%AA%AE%E8%88%89%E6%B3%95): 分别列出两整数的所有约数, 并找出最大的公约数。

- [素因数分解](https://zh.wikipedia.org/wiki/%E8%B3%AA%E5%9B%A0%E6%95%B8%E5%88%86%E8%A7%A3): 分别列出两数的素因数分解式, 并计算共同项的乘积。

- [短除法](https://zh.wikipedia.org/wiki/%E7%9F%AD%E9%99%A4%E6%B3%95): 两数除以其共同素因数, 直到两数互素时, 所有除数的乘积即为最大公约数。

- [辗转相除法](https://zh.wikipedia.org/wiki/%E8%BC%BE%E8%BD%89%E7%9B%B8%E9%99%A4%E6%B3%95): 又称欧几里得算法 `(Euclidean Algorithm)`, 两数相除, 取余数重复进行相除, 直到余数为 `0` 时, 前一个除数即为最大公约数。

**Note**

$$ gcm(a, b) * lcm(a, b) = |ab| $$

### 参考资料

[最大公约数 - wiki](https://zh.wikipedia.org/zh-cn/%E6%9C%80%E5%A4%A7%E5%85%AC%E5%9B%A0%E6%95%B8)
