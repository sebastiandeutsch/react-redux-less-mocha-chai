var path = require('path');
var webpackTestConfig = require('../webpack/webpack.config.test.js');

module.exports = {
  browsers: [
    'PhantomJS'
  ],
  files: [
    { pattern: 'tests.webpack.js', watched: true },
  ],
  frameworks: ['mocha'],
  preprocessors: {
    'tests.webpack.js': ['webpack', 'sourcemap'],
  },
  reporters: ['coverage', 'mocha'],
  coverageReporter: {
    dir: path.join(process.cwd(), 'coverage'),
    reporters: [
      { type: 'lcov', subdir: 'lcov' },
      { type: 'html', subdir: 'html' },
      { type: 'text-summary' },
    ],
  },
  webpack: webpackTestConfig,
  webpackMiddleware: {
    // webpack-dev-middleware configuration
    noInfo: true,
    stats: {
      colors: true
    }
  },
  captureTimeout: 10000
};
