// Polyfills
import 'phantomjs-function-bind-polyfill';
import 'babel-polyfill';

// If we need to use Chai, we'll have already chaiEnzyme loaded
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

window.chai = chai;
window.expect = chai.expect;

// Replace ./src with the directory of your application code and
// make sure the file name regexp matches your test files.
const context = require.context('../src/', true, /-test\.js$/);
context.keys().forEach(context);
