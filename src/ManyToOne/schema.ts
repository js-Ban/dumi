const schema = {
  type: 'object',
  properties: {
    aa: {
      type: 'string',
      title: 'AA',
      'x-component': 'Input',
    },
    bb: {
      type: 'boolean',
      enum: [
        { label: 'visible', value: true },
        { label: 'hidden', value: false },
      ],
      default: false,
      title: 'BB',
      'x-component': 'Select',
      'x-linkages': [
        {
          type: 'value:visible',
          target: '*(aa)',
          condition: '{{!!$value}}',
        },
      ],
    },
    cc: {
      type: 'string',
      title: 'CC',
      'x-component': 'Input',
      'x-component-props': {
        placeholder: 'CC',
      },
    },
  },
};

const schema1 = {
  type: 'object',
  properties: {
    aa: {
      type: 'boolean',
      enum: [
        { label: 'visible', value: true },
        { label: 'hidden', value: false },
      ],
      default: false,
      title: 'AA',
      'x-component': 'Select',
      'x-linkages': [
        {
          type: 'value:visible',
          target: '*(cc)',
          condition: '{{!!$value}}',
        },
      ],
    },
    bb: {
      type: 'string',
      title: 'BB',
      'x-component': 'Input',
    },
    cc: {
      type: 'string',
      title: 'CC',
      'x-component': 'Input',
    },
  },
};

export default {
  schema,
  schema1,
};
