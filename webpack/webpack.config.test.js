var path = require('path');
var webpack = require('webpack');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var WebpackLoaders = require('./webpack.loaders');
var WebpackResolve = require('./webpack.resolve');
var WebpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign(
  WebpackBaseConfig,
  {
    devtool: 'eval',
    plugins: [
      new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"test"'
      })
    ],
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    resolve: WebpackResolve
  }
);
