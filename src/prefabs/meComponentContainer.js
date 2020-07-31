(() => ({
  name: 'GetMe',
  icon: 'TitleIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'MeComponentContainer',
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
