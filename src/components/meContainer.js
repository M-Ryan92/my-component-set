(() => ({
  name: 'MeContainer',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div>
      <h1 className={classes.root}>useMe</h1>
      {(() => {
        const { useMeQuery } = B;
        const { data, loading, error } = useMeQuery(options.authProfile);

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
          </div>
        );
      })()}
    </div>
  ),
  styles: B => ({ typography }) => ({}),
}))();
