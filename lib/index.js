'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('./components/styles');

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _styles.Header;
  }
});
Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function get() {
    return _styles.Text;
  }
});

var _button = require('./components/button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }