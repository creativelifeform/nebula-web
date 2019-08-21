const withSass = require('@zeit/next-sass');
const withAssetsImport = require('next-assets-import');
const withProgressBar = require('next-progressbar');

require('dotenv').config();

const {
  env: { API_URL, TEST_EMAIL },
} = process;

module.exports = withProgressBar(
  withSass(
    withAssetsImport({
      progressBar: {
        profile: true,
      },
      env: {
        API_URL,
        TEST_EMAIL,
      },
      exportPathMap: function() {
        return {
          '/': { page: '/' },
        };
      },
    })
  )
);
