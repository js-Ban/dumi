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

### Antd

### @formily/antd-components
