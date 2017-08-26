'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.Button = undefined;

var _Styles = require('./components/Styles.js');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _Styles.Button;
  }
});
Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _Styles.Header;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LetsWrap = function LetsWrap() {
  return _react2.default.createElement(
    _Styles.Text,
    null,
    'Let us make this a styled-components NPM Wrap!!! ... '
  );
};

exports.default = LetsWrap;