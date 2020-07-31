(() => ({
  name: 'OneComponentContainer',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div>
      <h1 className={classes.root}>GetOne</h1>
      <B.GetOne modelId={options.model} filter={options.filter}>
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
            </div>
          );
        }}
      </B.GetOne>
    </div>
  ),
  styles: B => ({ typography }) => ({}),
}))();
