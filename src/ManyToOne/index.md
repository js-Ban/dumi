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
import 'antd/dist/antd.css';
import schema1 from './schema.ts';
// import { merge } from 'rxjs';
const { onFieldInputChange$ } = FormEffectHooks;

const ManyToOne = () => {
  const useManyToOneEffects = () => {
    const { setFieldState } = createFormActions();
    onFieldInputChange$('cc').subscribe(({ value }) => {
      setFieldState('aa', state => {
        state.value = value;
      });
    });
  };

  return (
    <SchemaForm
      schema={schema1}
      components={{ Input, Select }}
      initialValue={''}
      effects={() => {
        useManyToOneEffects();
      }}
    ></SchemaForm>
  );
};

export default () => <ManyToOne />;
```

##### 案例解析

- 多对一联动其实就是一对一联动，只不过作用的对象是同一个字段
- BB 控制 AA 显示隐藏，CC 控制 AA 的值

## 多依赖联动

##### Demo:

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
// import { combineLatest } from 'rxjs/operators';
import { Input, Select } from '@formily/antd-components';
import 'antd/dist/antd.css';
import schema from './shcema1.ts';
const { onFieldInputChange$ } = FormEffectHooks;

const Schema = () => {
  const useManyToOneEffects = () => {
    const { setFieldState } = createFormActions();
    setFieldState('cc', state => {
      state.value = 123;
    });
  };
  return (
    <SchemaForm
      schema={schema}
      components={{ Select, Input }}
      initiaValues={''}
      effects={() => {
        useManyToOneEffects();
      }}
    ></SchemaForm>
  );
};

export default () => <Schema />;
```

##### 案例解析

- Field 组件 visible 属性可以控制初始显示状态
- BB 的显示受外部异步事件所控制
- CC 的显示隐藏状态受 AA 的值控制，CC 的值受 AA 的附加信息所控制，同时整体联动依赖一个外部异步事件

## 链式联动

##### Demo:

```jsx
import React, { useEffect } from 'react';
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
import 'antd/dist/antd.css';
import schema from './schema2.ts';

const Schema = () => {
  return (
    <SchemaForm
      schema={schema}
      initiaValues={''}
      components={{ Select, Input }}
    ></SchemaForm>
  );
};
export default () => <Schema />;
```

##### 案例解析

- 链式联动，其实也是可以归一化为一对一联动
- AA 控制 BB 显示隐藏，BB 控制 CC 隐藏
