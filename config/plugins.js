module.exports = ({ env })=>({
  upload: {
    providerOptions: {
      localServer: {
        maxage: 300000
      }
    }
  }
});





// module.exports = ({ env }) => ({
//     upload: {
//       provider: 'aws-s3',
//       providerOptions: {
//         accessKeyId: "AKIA2NVUY27TM2X7S5LT",
//         secretAccessKey: "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",
//         region: 'eu-central-1',
//         params: {
//           Bucket: 'strapiuploaddemo996',
//         },
//       },
//     },
//   });


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


  