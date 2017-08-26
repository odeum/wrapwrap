'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = exports.Text = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tfont-family: \'Source Sans Pro\';\n\tfont-size: 18px;\n\tcolor: #3B97D3;\n'], ['\n\tfont-family: \'Source Sans Pro\';\n\tfont-size: 18px;\n\tcolor: #3B97D3;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-family: \'Source Sans Pro\';\n\tfont-style: \'normal\';\n'], ['\n\tfont-family: \'Source Sans Pro\';\n\tfont-style: \'normal\';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = exports.Text = _styledComponents2.default.a(_templateObject);

var Header = exports.Header = _styledComponents2.default.h1(_templateObject2);