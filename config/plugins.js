module.exports = ({ env })=>({
  upload: {
    providerOptions: {
      localServer: {
        maxage: 300000
      }
    }
  }
});








  module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',

      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'aws-region',
        params: {
          Bucket: 'strapiuploaddemo996',
        },
      },
    },
  });


  