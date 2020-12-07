const schema = {
  type: 'object',
  key: 'object',
  properties: {
    aa: {
      type: 'boolean',
      title: 'AA',
      key: 'aa',
      'x-component': 'Select',
      default: false,
      enum: [
        { label: 'visible', value: true },
        { label: 'hidden', value: false },
      ],
      'x-linkages': [
        {
          type: 'value:visible',
          target: '*(bb)',
          condition: '{{!!$value}}',
        },
      ],
    },
    bb: {
      type: 'string',
      title: 'BB',
      key: 'bb',
      'x-component': 'Input',
      enum: [
        { label: 'visible', value: true },
        { label: 'hidden', value: false },
      ],
      default: false,
      'x-linkages': [
        {
          type: 'value:visible',
          target: '*(cc)',
          condition: '{{!!$value}}',
        },
      ],
    },
    cc: {
      type: 'string',
      title: 'CC',
      name: 'cc',
      key: 'cc',
      'x-component': 'Input',
    },
  },
};

export default schema;
