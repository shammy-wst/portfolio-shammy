/** @type {import('next').NextConfig} */
// next.config.js

module.exports = {
    images: {
      // The patterns array should contain objects with 'hostname' property
      remotePatterns: [
        {
          hostname: 'i.imgur.com',
        },
        {
          hostname: 'bored-bucket.s3.eu-west-3.amazonaws.com',
        },
      ],
    },
  };
  