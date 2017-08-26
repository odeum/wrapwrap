'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = exports.Text = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size: 15px;\n\tcolor: green;\n'], ['\n\tfont-size: 15px;\n\tcolor: green;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tfont-family: \'Source Sans Pro\';\n\tfont-weight: 300;\n\tfont-style: \'normal\';\n'], ['\n\tfont-family: \'Source Sans Pro\';\n\tfont-weight: 300;\n\tfont-style: \'normal\';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = exports.Text = _styledComponents2.default.text(_templateObject);

var Header = exports.Header = _styledComponents2.default.h2(_templateObject2);
