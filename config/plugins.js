const {join} = require('path')

module.exports = ({ env }) => ({
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
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },}
});

