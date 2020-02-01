#### 新建文件

在`docs/zh`中新建一个文件, 并新建一个 `README.md`的文件

```sh
touch docs/zh/test/README.md
```

#### 配置别名

我们不支持中文名文件夹, 所以你需要给文件名配置别名, 只需要在`docs/.vuepress/utils/alias.js`中配置 `key-value`值即可

<<< @/docs/.vuepress/utils/alias.js

#### 图片

`@images`路径 `->` 根路径

```md
![images.png](@images/src/xxx)
```

`Eg:`

![fibonacci.png](@images/src/Math/fibonacci/images/fibonacci.png)

#### 导入代码块

你可以在文档中展示你的代码, 只需要使用下面方式即可

```md
<<< @/filepath
```
**Note:** `filepath`是你文档的路径

`Eg:`
```md
<<< @/src/Math/factorial/index.ts
```

#### 数学公式

你可以在文档中使用 **`markdown`** 来书写一下数学公式

```md
$$
y=\begin{cases}
-x,\quad x\leq 0 \\\\
x,\quad x>0
\end{cases}
$$
```

$$
y=\begin{cases}
-x,\quad x\leq 0 \\\\
x,\quad x>0
\end{cases}
$$

#### 自定义容器

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

#### Emoji

```md
:tada: :100:
```

:tada: :100: