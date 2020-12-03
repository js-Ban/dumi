---
nav:
  title: 一对多联动
#   path: /components
---

# 实现复杂联动逻辑

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
const { onFieldValueChange$ } = FormEffectHooks;

// const useManyToOneEffects = () => {
//   const { setFieldState } = createFormActions();
//   onFieldValueChange$('bb').subscribe(({ value }) => {
//     setFieldState('aa', (state) => {
//       state.visible = value;
//     });
//   });
//   onFieldValueChange$('cc').subscribe(({ value }) => {
//     setFieldState('aa', (state) => {
//       state.value = value;
//     });
//   });
// };

const ManyToOne = () => {
  return (
    <SchemaForm
      schema={schema}
      components={{ Input, Select }}
      initialValue={false}
    ></SchemaForm>
    // <Form
    //   onSubmit={(values) => {
    //     console.log(values);
    //   }}
    //   effects={() => {
    //     useManyToOneEffects();
    //   }}
    // >
    //   <FormItem name="aa" title="AA" component={Input} />
    //   <FormItem
    //     dataSource={[
    //       { label: 'visible', value: true },
    //       { label: 'hidden', value: false },
    //     ]}
    //     initialValue={false}
    //     name="bb"
    //     title="BB"
    //     component={Select}
    //   />
    //   <FormItem name="cc" title="CC" component={Input} />
    // </Form>
  );
};

export default () => <ManyToOne />;
// ReactDOM.render(<ManyToOne />, document.getElementById('root'));
```
