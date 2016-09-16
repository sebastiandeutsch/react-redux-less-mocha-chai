module.exports = [
  {
    test: /(\.js|\.jsx)$/,
    loaders: ['babel'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: "style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
  },
  {
    test: /\.less$/,
    loaders: [
      'style',
      'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'less'
    ]
  },
  {
    test: /\.png$|\.gif$/,
    loader: "url-loader?limit=100000"
  },
  {
    test: /\.jpe?g$/,
    loader: "file-loader"
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  }
];
