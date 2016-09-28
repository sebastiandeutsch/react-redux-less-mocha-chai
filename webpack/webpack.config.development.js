var path = require('path');
var webpack = require('webpack');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var WebpackNotifierPlugin = require('webpack-notifier');
var WebpackLoaders = require('./webpack.loaders');
var WebpackResolve = require('./webpack.resolve');
var WebpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign(
  WebpackBaseConfig,
  {
    entry: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      './src/index'
    ],
    plugins: [
      new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
      }),
      new WebpackNotifierPlugin()
    ],
  }
);
