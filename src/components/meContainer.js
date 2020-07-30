(() => ({
  name: "MeContainer",
  type: "BODY_COMPONENT",
  allowedTypes: [],
  orientation: "HORIZONTAL",
  jsx: (
    <div>
      <h1 className={classes.root}>profile: {options.authProfile}</h1>
      {(() => {
        const { useMeQuery } = B;
        const { data, loading, error } = useMeQuery(options.authProfile);
        console.log({ data, loading, error });
      })()}
    </div>
  ),
  styles: B => ({ typography }) => ({})
}))();
