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

### @formily/antd-components
