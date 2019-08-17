const withSass = require('@zeit/next-sass');
const withAssetsImport = require('next-assets-import');

module.exports = withSass(withAssetsImport());
