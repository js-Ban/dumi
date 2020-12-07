---
nav:
  title: 实现复杂联动逻辑
#   path: /components
---

## 多对一联动

##### Demo:

```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  Form,
  FormItem,
  FormButtonGroup,
  createFormActions,
  FormEffectHooks,
  Submit,
  Reset,
} from '@formily/antd'; // 或者 @formily/next
import { Input, Select } from '@formily/antd-components';
// import Printer from '@formily/printer';
import 'antd/dist/antd.css';
import schema from './schema.ts';

// const { onFieldValueChange$ } = FormEffectHooks;

const ManyToOne = () => {
  return (
    <SchemaForm
      schema={schema}
      components={{ Input, Select }}
      initialValue={false}
    ></SchemaForm>
  );
};

export default () => <ManyToOne />;
```

##### 案例解析

- 多对一联动其实就是一对一联动，只不过作用的对象是同一个字段
- BB 控制 AA 显示隐藏，CC 控制 AA 的值

## 多依赖联动

```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  createFormActions,
  FormEffectHooks,
  createEffectHook,
  Submit,
  Reset,
} from '@formily/antd'; // 或者 @formily/next
import { combineLatest } from 'rxjs/operators';
import { Input, Select } from '@formily/antd-components';
import 'antd/dist/antd.css';
import schema1 from './schema.ts';

const Schema1 = () => {
  return (
    <SchemaForm
      components={(Select, Input)}
      schema={schema1}
      initiaValues={false}
    />
  );
};

export default () => <Schema1 />;
```
