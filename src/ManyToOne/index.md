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

## 循环联动

```bash
联动关系 Total = Price * Count;Count = Total / Price;Price = Total / Count
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset,
  FormEffectHooks,
  createFormActions,
} from '@formily/antd';
import { NumberPicker } from '@formily/antd-components';
import 'antd/dist/antd.css';

const { onFormInit$, onFieldValueChange$ } = FormEffectHooks;

const useCyclicLinkageEffects = () => {
  const { setFieldState, getFieldState } = createFormActions();
  onFieldValueChange$('total').subscribe(({ value }) => {
    if (!value) return;
    setFieldState('count', state => {
      const price = getFieldState('price', state => state.value);
      if (!price) return;
      state.value = value / price;
    });
    setFieldState('price', state => {
      const count = getFieldState('count', state => state.value);
      if (!count) return;
      state.value = value / count;
    });
  });
  onFieldValueChange$('price').subscribe(({ value }) => {
    if (!value) return;
    setFieldState('total', state => {
      const count = getFieldState('count', state => state.value);
      if (!count) return;
      state.value = value * count;
    });
    setFieldState('count', state => {
      const total = getFieldState('total', state => state.value);
      if (!total) return;
      state.value = total / value;
    });
  });
  onFieldValueChange$('count').subscribe(({ value }) => {
    if (!value) return;
    setFieldState('total', state => {
      const price = getFieldState('price', state => state.value);
      if (!price) return;
      state.value = value * price;
    });
    setFieldState('price', state => {
      const total = getFieldState('total', state => state.value);
      if (!total) return;
      state.value = total / value;
    });
  });
};

const Schema = () => (
  <SchemaForm
    components={{
      NumberPicker,
    }}
    effects={() => {
      useCyclicLinkageEffects();
    }}
    onChange={v => console.log(v)}
    labelCol={6}
    wrapperCol={4}
    onSubmit={v => console.log(v)}
  >
    <Field
      name="total"
      type="number"
      required
      title="Total"
      x-component="NumberPicker"
    />
    <Field
      name="count"
      type="number"
      required
      title="Count"
      x-component="NumberPicker"
    />
    <Field
      name="price"
      type="number"
      required
      title="Price"
      x-component="NumberPicker"
    />
    <FormButtonGroup offset={6}>
      <Submit />
      <Reset />
    </FormButtonGroup>
  </SchemaForm>
);

export default () => <Schema />;
```

##### 案例解析

循环联动，其实也是可以归一到一对一联动的

## 联动校验

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  SchemaForm,
  Field,
  FormButtonGroup,
  Submit,
  Reset,
  FormEffectHooks,
  createFormActions,
} from '@formily/antd';
import { Input, Password } from '@formily/antd-components';
import 'antd/dist/antd.css';

const { onFieldValueChange$ } = FormEffectHooks;

const useLinkageValidateEffects = () => {
  const { setFieldState, getFieldState } = createFormActions();
  onFieldValueChange$('*(password,confirm)').subscribe(fieldState => {
    const selfName = fieldState.name;
    const selfValue = fieldState.value;
    const otherName = selfName == 'password' ? 'confirm' : 'password';
    const otherValue = getFieldState(otherName, state => state.value);
    setFieldState(otherName, state => {
      if (selfValue && otherValue && selfValue !== otherValue) {
        state.errors = '两次密码输入不一致';
      } else {
        state.errors = '';
      }
    });
    setFieldState(selfName, state => {
      if (selfValue && otherValue && selfValue !== otherValue) {
        state.errors = '两次密码输入不一致';
      } else {
        state.errors = '';
      }
    });
  });
};

const Schema = () => (
  <SchemaForm
    labelCol={6}
    wrapperCol={6}
    components={{
      Input,
      Password,
    }}
    effects={() => {
      useLinkageValidateEffects();
    }}
  >
    <Field
      type="string"
      name="username"
      title="用户名"
      required
      x-component="Input"
    />
    <Field
      type="password"
      name="password"
      title="密码"
      x-props={{ checkStrength: true }}
      description={
        <ul>
          <li>1. 长度不小于8个</li>
          <li>2. 必须包含大小写数字符号</li>
        </ul>
      }
      required
      x-component="Password"
    />
    <Field
      type="password"
      name="confirm"
      title="确认密码"
      x-props={{ checkStrength: true }}
      required
      x-component="Password"
    />
    <FormButtonGroup offset={6}>
      <Submit />
      <Reset />
    </FormButtonGroup>
  </SchemaForm>
);
export default () => <Schema />;
```

##### 案例解析

联动校验都需要手动操作字段状态的 errors 属性来控制，你既需要控制错误的出现时机，也要控制错误的隐藏时机
