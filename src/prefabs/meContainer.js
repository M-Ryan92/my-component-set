(() => ({
  name: 'useMe',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'MeContainer',
      options: [
        {
          type: 'AUTHENTICATION_PROFILE',
          label: 'auth profile',
          key: 'authProfile',
          value: '',
        },
      ],
      descendants: [],
    },
  ],
}))();
