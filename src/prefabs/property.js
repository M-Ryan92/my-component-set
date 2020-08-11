(() => ({
  name: 'property',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'property',
      options: [
        {
          type: 'PROPERTY',
          key: 'propertyId',
          label: 'Property',
          value: '',
          configuration: {
            apiVersion: 'v2',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
