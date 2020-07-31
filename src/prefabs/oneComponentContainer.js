(() => ({
  name: 'GetOne',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'OneComponentContainer',
      options: [
        {
          type: 'MODEL',
          label: 'Model',
          key: 'model',
          value: '',
        },
        {
          type: 'FILTER',
          label: 'Filter',
          key: 'filter',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
