var path = require('path');
var webpack = require('webpack');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var WebpackLoaders = require('./webpack.loaders');
var WebpackResolve = require('./webpack.resolve');
var WebpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign(
  WebpackBaseConfig,
  {
    devtool: 'inline-source-map',
    isparta: {
      babel: {
        presets: ['es2015', 'react', 'stage-0'],
      },
    },
    plugins: [
      new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __ENVIRONMENT__: '"test"'
      })
    ],
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    resolve: WebpackResolve,
    module: {
      noParse: [
        /node_modules\/sinon\//,
      ],
      preLoaders: [
        {
          test: /(\.js|\.jsx)$/,
          loader: 'isparta',
          include: path.resolve('./src/'),
        },
      ],
      loaders: WebpackLoaders
    }
  }
);
