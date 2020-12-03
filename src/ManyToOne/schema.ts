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

export default schema;
