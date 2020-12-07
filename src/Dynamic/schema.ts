const schema = {
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
          target: '*(bb,cc,dd)',
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
    dd: {
      type: 'string',
      title: 'DD',
      'x-component': 'Input',
    },
  },
};

export default schema;
