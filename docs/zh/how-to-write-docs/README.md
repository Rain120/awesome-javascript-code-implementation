## 如何写文档? <Badge text='Important' type='warning'/>

::: tip
文档的规范, 以及如何方便快捷的书写 ✍️ 文档
:::

## 新建文件

在`docs/zh`中新建一个文件, 并新建一个 `README.md`的文件

::: danger
请保证每一个文件夹都有一个 `README.md`文件
:::

```sh
npm run docs

# or

touch docs/zh/test/README.md
```

```sh
# npm run docs
? please input the docs model name:  model
? please input the docs model alias name (default same as model name)? 
? generator model path (etc: docs/zh/model) ? docs/zh
```

`Eg: File Path`

```sh
docs/zh
├── algorithms
│   ├── README.md
│   └── binaryTree
│       └── README.md
├── array
│   ├── README.md
│   ├── arrayMove
│   │   └── README.md
│   ├── find
│   │   └── README.md
│   └── isArray
│       └── README.md
├── design-pattern
│   ├── README.md
│   ├── adapter-pattern
│   │   └── README.md
│   ├── decorator-pattern
│   │   └── README.md
│   ├── facade-pattern
│   │   └── README.md
```

**模板文件**
`plop-templates/docs/zh/README.md.hbs`

<<< @/plop-templates/docs/zh/README.md.hbs

## 新建 Code 模板 + 单测模板

```sh
npm run template-docs
```

```sh
? please input the name:  template
? please input the docs model alias name (default same as model name)? 
? Do you want test file ?  Yes
? generator path (etc: src/template) ? src
? generator model path (etc: docs/zh/model) ? docs/zh
```

**模板文件**

`plop-templates/code/__tests__.ts.hbs`

<<< @/plop-templates/code/__tests__.ts.hbs

`plop-templates/code/index.ts.hbs`

<<< @/plop-templates/code/index.ts.hbs

`plop-templates/code/README.md.hbs`

<<< @/plop-templates/code/README.md.hbs

## 文档顺序

::: tip
`alias.json` 的顺序就是文档的顺序
:::

## 配置别名

::: tip
通过使用 [新建文件](#新建文件) 的脚本来动态配置 `alias`, 妈妈再也不用担心我找不到配置了。
:::

我们不支持中文名文件夹, 所以你需要给文件名配置别名, 只需要在`docs/.vuepress/utils/alias.json`中配置 `key-value`值即可

<<< @/docs/.vuepress/utils/alias.json

## 图片

`~@images`路径 `->` 根路径

```md
![images.png](~@images/src/xxx)
```

`Eg:`

```md
![fibonacci.png](~@images/src/Math/fibonacci/images/fibonacci.png)
```

![fibonacci.png](~@images/src/Math/fibonacci/images/fibonacci.png)

## 类型定义

::: warning
请在 `src/types`中增加新的类型文件后(默认是在 `index.d.ts`中定义, 此处已经导入好了), 在 [utils](docs/zh/types/README.md) 中导入代码块, 具体导入代码详见 👇👇[导入代码块](#导入代码块)。
:::

## 工具函数定义

::: warning
请在 `src/utils`中增加新的工具函数文件后, 在 [utils](docs/zh/utils/README.md) 中导入代码块, 具体导入代码详见 👇[导入代码块](#导入代码块)。
:::

## 导入代码块

你可以在文档中展示你的代码, 只需要使用下面方式即可

```md
<<< @/filepath
```

**Note:** `filepath`是你文档的路径

`Eg:`

```md
<<< @/src/Math/factorial/index.ts
```

## 数学公式

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

## Badge 徽章

- **Props:**

  - `text - string`

  - `type - string`, 可选值: `'tip' | 'warning' | 'error'`, 默认值是: `'tip'`

  - `vertical - string`, 可选值: `'top' | 'middle'`, 默认值是: `'top'`

- **Usage:**

你可以在标题中, 使用这个组件来为某些 API 添加一些状态：

```md
Badge <Badge text='默认主题' /> <Badge text='warning' type='warning'/> <Badge text='error' type='error'/>
```

Badge <Badge text='默认主题' /> <Badge text='warning' type='warning'/> <Badge text='error' type='error'/>

## 自定义容器

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

## Emoji

```md
:tada: :100:
```

:tada: :100:
