const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withVideos = require('next-videos');
const webpack = require('webpack');
const { parsed: __ENV__ } = require('dotenv').config();

const sassConfig = {};
const videosConfig = {};
const plugins = [[withSass, sassConfig], [withVideos, videosConfig]];
const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(new webpack.EnvironmentPlugin(__ENV__));

    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);
