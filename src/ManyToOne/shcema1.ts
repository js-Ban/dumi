const schema1 = {
  type: 'object',
  key: 'object',
  properties: {
    aa: {
      type: 'boolean',
      key: 'AA',
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
      key: 'BB',
      'x-component': 'Input',
    },
    cc: {
      type: 'string',
      title: 'CC',
      key: 'CC',
      'x-component': 'Input',
    },
  },
};
export default schema1;
