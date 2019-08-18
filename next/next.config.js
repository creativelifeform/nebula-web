const withSass = require('@zeit/next-sass');
const withAssetsImport = require('next-assets-import');

require('dotenv').config();

const {
  env: { API_URL, TEST_EMAIL },
} = process;

module.exports = withSass(
  withAssetsImport({
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
);
