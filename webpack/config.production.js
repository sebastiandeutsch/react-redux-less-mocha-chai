var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var WebpackLoaders = require('./webpack-loaders');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle-[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin()),
    new CopyWebpackPlugin([
      { from: 'src/public' }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // this one replaces the bundle.js with the hashed version for caching reasons
    function () {
      this.plugin("done", function (stats) {
        var replaceInFile = function (filePath, toReplace, replacement) {
          var replacer = function (match) {
            console.log('Replacing in %s: %s => %s', filePath, match, replacement);
            return replacement
          };
          var str = fs.readFileSync(filePath, 'utf8');
          var out = str.replace(new RegExp(toReplace, 'g'), replacer);
          fs.writeFileSync(filePath, out);
        };

        var hash = stats.hash; // Build's hash, found in `stats` since build lifecycle is done.

        replaceInFile(path.join(__dirname, '../dist', 'index.html'),
          'bundle.js',
          'bundle-' + hash + '.js'
        );
      });
    }
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src/'),
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: WebpackLoaders
  }
};
