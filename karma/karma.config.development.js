var _ = require('lodash');
var karmaBaseConfig = require('./karma.config.base');

module.exports = function(config) {
  var configOptions = _.assign({}, karmaBaseConfig, {
    autoWatch: true,
    browsers: [
      //'PhantomJS',
      'Chrome',
      //'ChromeCanary',
      //'Firefox',
      //'Safari',
      //'Opera',
      //'IE',
    ],
    logLevel: config.LOG_INFO,
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    }
  });
  config.set(configOptions);
};
