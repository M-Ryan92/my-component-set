(() => ({
  name: 'OneContainer',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div>
      <h1 className={classes.root}>useOne</h1>
      {(() => {
        const { useOneQuery } = B;
        const { data, loading, error } = useOneQuery(options.model, {
          filter: options.filter,
        });

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
