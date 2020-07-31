(() => ({
  name: 'MeComponentContainer',
  type: 'BODY_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (
    <div>
      <h1 className={classes.root}>GetMe</h1>
      <B.GetMe authenticationProfileId={options.authProfile}>
        {({ loading, error, data }) => {
          console.log({ data, loading, error });

          if (loading) {
            return <span>Loading...</span>;
          }

          if (error) {
            return <span>Something went wrong: {error.message} :(</span>;
          }

          const { id } = data;

          return (
            <div>
              <p>Fetched a record with ID: {id}.</p>
              {children}
            </div>
          );
        }}
      </B.GetMe>
    </div>
  ),
  styles: B => ({ typography }) => ({}),
}))();
