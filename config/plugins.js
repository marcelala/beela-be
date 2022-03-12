const {join} = require('path')

module.exports = ({ env }) => ({
  // other plugins' configuration

  graphql: {
    enabled: true,
    config: {
      generateArtifacts: true,
      artifacts: {
        schema: join(__dirname, '..', 'schema.graphql'),
        typegen: join(__dirname, '..', 'types.d.ts'),
      },
    }
  },
  // ...
});

