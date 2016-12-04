var path = require('path');

module.exports = {
  extensions: ['', '.js', '.jsx'],
  root: path.resolve('./src/'),
  modulesDirectories: ['node_modules'],
  alias: {
    sortobject: path.join(__dirname, '..', 'node_modules', 'sortobject', 'es2015', 'index.js')
  }
};
