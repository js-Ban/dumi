---
nav:
  title: 帮助
---

# 相关组件库介绍

### Formilyjs

在 Formily 中，主要有三种开发模式，主要是：

- JSON Schema 开发表单
  - 该方案主要用于后端动态渲染表单

* JSX Schema 开发表单

  - 该方案主要用于后端动态渲染表单的过渡形态，Schema 在前端维护，方便未来迁移后端动态渲染模式

* 纯 JSX(源码) 开发表单
  - 该方案主要用于纯前端开发方式，或者在前两个方案的自定义组件内部的开发以复合形态来开发。

下面我们以具体例子来详细介绍不同开发模式的差异，案例右下角可以查看源码也可以跳转至 CodeSandbox 中试玩该例子。 我们在看例子的过程中不需要详细理解具体 API，只需要了解个大概即可。

在该例子中，只需要了解我们需要用到一个叫 SchemaForm 的组件，同时需要给该组件传递一个叫做 schema 的属性，该属性接收一个 json 对象。
相关文档----> 《<a href="https://formilyjs.org/#/0yTeT0/8MsesjHa" target="_blank">Formilyjs</a>》

#### 快速安装

##### 环境准备

###### 安装

如果你使用的是 Ant Design

```bash
npm install --save antd @formily/antd @formily/antd-components
```

@formily/antd 主要是作为 Form 核心库，@formily/antd-components 主要作为 Form 的 antd 扩展组件库，我们可以不使用@formily/antd-components，它只是作为扩展包

###### 引入

```bash
import React from 'react'
import ReactDOM from 'react-dom'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/antd' // 或者 @formily/next
import { Input } from '@formily/antd-components' // 或者@formily/next-components
```

这里需要注意几点：

- 引入 SchemaForm，用于 Schema 渲染表单
- 引入 SchemaMarkupField，用于渲染 Schema 节点
- 引入 FormButtonGroup，用于处理表单按钮组布局
- 引入 Submit，用于处理按钮点击自动触发提交操作
- 引入 Reset，用于处理按钮点击自动触发重置操作
- 从@formily/antd-components 中引入 Input 组件(按需引入)，该 Input 组件属于扩展后的 Input 组件，它内部实现了一些额外状态的映射
- 想要看完整的扩展组件列表，可以跳转至 API 列表中详细查看@formily/antd-components 的具体 API

#### 热身案例

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset,
} from '@formily/antd'; // 或者 @formily/next
import { Input } from 'antd';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <SchemaForm
      components={{ Input }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Field type="string" name="name" title="Name" x-component="Input" />
      <FormButtonGroup>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  );
};

/*
 JSON Schema写法
const App = () => {
  const { form, table } = useFormTableQuery(service)
  return (
    <SchemaForm
      components={{ Input }}
      schema={{
        type:"object",
        properties:{
          name:{
            type:"string",
            title:"Name",
            x-component":"Input"
          }
        }
      }}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
      <FormButtonGroup>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  )
}
*/

export default () => <App />;
// ReactDOM.render(<App />, document.getElementById('root'));
```

##### 案例解析

- SchemaForm 的 components 属性可以传入任意一个只要满足 value/onChange 属性的组件
- Field 组件代表每个 json schema 的一个原子描述节点，它的属性与 json schema 完全等价。
- Field 指定 x-component 的名称会和 SchemaForm 属性传入的 components 映射起来。

```html
注意：以上代码是以 JSX Schema 形式来写的，后面我们的案例也都会以 JSX Schema
形式来写，如果想要了解对应的 JSON Schema 写法，每个案例下方都会有一个 Print
Schema 的按钮，点击可以查看与其完全等价的 JSON Schema 写法
```

更多案例请参考 <a href="https://formilyjs.org/#/0yTeT0/P2I1IdiR" target="_blank">Formilyjs</a>

### Antd

#### 在 create-react-app 中使用

<a href="https://github.com/facebook/create-react-app" target="_blank">create-react-app</a> 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。

#### 安装和初始化

在开始之前，你可能需要安装 <a href="https://github.com/yarnpkg/yarn/" target="_blank">yarn</a>。

```bash
$ yarn create react-app antd-demo

# or

$ npx create-react-app antd-demo
```

工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。

然后我们进入项目并启动。

```bash
$ cd antd-demo
$ yarn start
```

此时浏览器会访问 http://localhost:3000/ ，看到 Welcome to React 的界面就算成功了。

#### 引入 antd

这是 create-react-app 生成的默认目录结构。

```bash
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

现在从 yarn 或 npm 安装并引入 antd。

```bash
$ yarn add antd
```

修改 src/App.js，引入 antd 的按钮组件。

```bash
import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

修改 src/App.css，在文件顶部引入 antd/dist/antd.css。

```bash
@import '~antd/dist/antd.css';
```

好了，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的<a href="https://create-react-app.dev/docs/getting-started/" target="_blank">官方文档</a>。

我们现在已经把 antd 组件成功运行起来了，开始开发你的应用吧！

#### 高级配置

这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。

此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 craco （一个对 create-react-app 进行自定义配置的社区解决方案）。

现在我们安装 craco 并修改 package.json 里的 scripts 属性。

```bash
$ yarn add @craco/craco
```

```bash
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

然后在项目根目录创建一个 craco.config.js 用于修改默认配置。

```bash
/* craco.config.js */
module.exports = {
  // ...
};
```

更多内容请参考<a href="https://ant.design/docs/react/use-with-create-react-app-cn" target="_blank">Antd 官网</a>。

### @formily/antd-components

#### 安装

```bash
npm install --save @formily/antd-components
```

#### 显式加载组件

通过在 SchemaForm 传入 components，可以快速置入组件，表单字段通过 x-component 使用到内置的组件。

```bash
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
} from '@formily/antd';
import { Input } from '@formily/antd-components';
import 'antd/dist/antd.css';

export default () => {
  return (
    <SchemaForm components={{ Input }}>
      <Field title="Text" name="text" x-component="Input" />
    </SchemaForm>
  );
};
```

#### 使用内置组件

通过 setup 方法，可以快速置入内置的表单组件，免去维护全局 components 的工作。

```bash
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
} from '@formily/antd';
import { setup } from '@formily/antd-components';
import 'antd/dist/antd.css';

setup();
export default () => {
  return (
    <SchemaForm>
      <Field type="string" title="Text" name="text" />
    </SchemaForm>
  );
};
```

更多内容请参考<a href="https://formilyjs.org/#/zoi8i0/ZrsYs6hytQ" target="_blank">@formily/antd-components</a>。
