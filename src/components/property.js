(() => ({
  name: 'property',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.root}>
      Blaat
      {(() => {
        const { Property } = B;
        const { propertyId } = options;
        const property = B.getProperty(propertyId);
        return (
          <>
            <p>
              <Property id={propertyId} />
            </p>
            {property && (
              <p>
                {property.kind},{property.modelId}, {property.name}
              </p>
            )}
          </>
        );
      })()}
    </div>
  ),
  styles: () => () => ({
    root: {},
  }),
}))();
