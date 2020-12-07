---
nav:
  title: 一对多联动
#   path: /components
---

# 实现复杂联动逻辑

我们的联动逻辑的复杂度通常取决于是否存在以下几种问题：

- 联动类型复杂
  - 一对多联动
  - 多对一联动
  - 多依赖联动
  - 链式联动
  - 循环联动
  - 联动校验
- 联动过程中存在异步
- 联动过程中存在大量数据转换逻辑
- 自增列表中相邻字段或者与上一级/下一级字段间的联动
- 动态联动，这里主要讲的是 JSON Schema 中的动态联动，比如是用户手工配置联动规则

上面分析那么多，其实每种问题都是比较麻烦的，一不小心，就会把代码变得非常难以维护，所以我们在解决这类复杂问题的时候，更多的是需要寻找一个可以优雅分解问题的解题策略。

直接看例子：

### 一对多联动

##### Demo:

```tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  createFormActions,
  FormEffectHooks,
  Submit,
  Reset,
} from '@formily/antd'; // 或者 @formily/next
import { Input, Select } from '@formily/antd-components';
// import Printer from '@formily/printer';
import schema from './schema.ts';
import 'antd/dist/antd.css';

const { onFieldValueChange$ } = FormEffectHooks;
const Dynamic = () => {
  return (
    <SchemaForm schema={schema} components={{ Input, Select }}></SchemaForm>
  );
};

export default () => <Dynamic />;
```

##### 案例分析

- 使用 FormEffectHooks 可以很方便的将联动逻辑拆分出去，方便我们进行物理分离
- 借助路径系统的批量匹配能力实现一对多联动
