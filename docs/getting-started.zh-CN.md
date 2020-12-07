---
nav:
  title: 快速上手
  order: 1
---

## 环境准备

首先得有 <a href="https://nodejs.org/en/" target="_blank">node</a> 并确保 node 版本是 10.13 或以上。

```html
$ node -v 版本要大于v10.13.0
```

## 脚手架初始化

为了方便使用，dumi 提供了两种不同的脚手架，两者的区别可以查看 指南-多种呈现模式。我们需要先找个地方建个空目录，然后再使用脚手架：

```html
$ mkdir myapp && cd myapp
```

### 组件开发脚手架

组件库开发脚手架除了包含 dumi 和基础的文档外，还包含一个简单的组件、umi-test 和 father-build，可轻松实现开发组件、编写文档、编写测试用例、打包组件的全流程。

```html
<!-- $ npx @umijs/create-dumi-lib        # 初始化一个文档模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib
$ npx @umijs/create-dumi-lib --site # 初始化一个站点模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib --site -->
```

### 静态站点脚手架

静态站点脚手架即一个多语言的站点模式脚手架，仅包含文档。

```html
<!-- $ npx @umijs/create-dumi-app
# or
$ yarn create @umijs/dumi-app -->
```

## 手动初始化

### 安装

建立一个空文件夹，然后在文件夹下执行以下命令进行安装：

```html
$ npm i dumi -D
```

### 开始写文档

dumi 默认会自动搜寻 docs、src（或各 lerna 包下的 src）目录下的 markdown 文件，我们先来一篇最简单的文档：

```html
$ mkdir src && echo '# Hello dumi!' > src/index.md
```

然后执行 npx dumi dev，文档将会呈现在你眼前：

### 写个 Demo 试试看

dumi 会将 jsx/tsx 代码块当做 React Component 进行渲染然后放入 Demo 包裹器中，我们将 src/index.md 修改为如下内容：

# Hello dumi!

````html
<!-- ```jsx
    import React from 'react';

    export default () => <h2>First Demo</h2>;
  ``` -->
````

效果如下：

```jsx
import React from 'react';

export default () => <h2>First Demo</h2>;
```
