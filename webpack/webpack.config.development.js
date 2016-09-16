var path = require('path');
var webpack = require('webpack');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var WebpackNotifierPlugin = require('webpack-notifier');
var WebpackLoaders = require('./webpack.loaders');
var WebpackResolve = require('./webpack.resolve');

module.exports = {
  devtool: 'source-map', // 'eval'
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new WebpackNotifierPlugin()
  ],
  resolve: WebpackResolve,
  module: {
    loaders: WebpackLoaders
  }
};
