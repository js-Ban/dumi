---
nav:
  title: Getting Started
  order: 1
---

## Environmental preparation

First, you must have a <a href="https://nodejs.org/en/" target="_blank">node</a> and make sure that the node version is 10.13 or above.

```bash
$ node -v 版本要大于v10.13.0
```

## Scaffolding initialization

For ease of use, dumi provides two different scaffolds. The difference between the two can be viewed in the guide-multiple presentation modes. We need to find a place to create an empty directory, and then use scaffolding:

```bash
$ mkdir myapp && cd myapp
```

### Component development scaffolding

In addition to dumi and basic documentation, the component library development scaffold also contains a simple component, umi-test and father-build, which can easily implement the whole process of developing components, writing documents, writing test cases, and packaging components.

```bash
$ npx @umijs/create-dumi-lib        # 初始化一个文档模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib
$ npx @umijs/create-dumi-lib --site # 初始化一个站点模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib --site
```

### Static site scaffolding

Static site scaffolding is a multilingual site mode scaffolding that only contains documents.

```bash
$ npx @umijs/create-dumi-app
# or
$ yarn create @umijs/dumi-app
```

## Manual initialization

### installation

Create an empty folder, and then execute the following command under the folder to install:

```bash
$ npm i dumi -D
```

### Start writing

By default, dumi will automatically search for markdown files in the docs, src (or src under each lerna package) directory. Let’s start with the simplest document:

```bash
$ mkdir src && echo '# Hello dumi!' > src/index.md
```

Then execute `npx dumi dev` , the document will be presented before your eyes:

### Write a demo to try

dumi 会将 jsx/tsx 代码块当做 React Component 进行渲染然后放入 Demo 包裹器中，我们将 src/index.md 修改为如下内容：

# Hello dumi!

`````bash
# ```jsx
#     import React from 'react';

#     export default () => <h2>First Demo</h2>;
# ````

`````

效果如下：

```jsx
import React from 'react';

export default () => <h2>First Demo</h2>;
```

```

```
