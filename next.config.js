const withSass = require('@zeit/next-sass');
const withAssetsImport = require('next-assets-import');
const withProgressBar = require('next-progressbar');
const routes = require('./content/routes');

require('dotenv').config();

const {
  env: { API_URL, TEST_EMAIL, UA_ID },
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
        UA_ID,
      },
      exportPathMap: function() {
        const map = {};

        routes.forEach(({ path }) => {
          map[path] = { page: path };
        });

        return map;
      },
    })
  )
);
