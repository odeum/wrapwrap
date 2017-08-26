'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tborder-radius: 4px;\n\tfont-size: 20px;\n\tfont-family: \'Source Sans Pro\';\n\tfont-weight: 300;\n\tfont-style: \'normal\';\n\tbackground: ', ';\n\tpadding: \'9px 20px 9px 15px\';\n\tmargin-right: 0.7rem;\n\tborder: 1px solid black;\n\tcursor: ', ';  \n\ttext-decoration: none;\n\tuser-select: none;\n'], ['\n\tborder-radius: 4px;\n\tfont-size: 20px;\n\tfont-family: \'Source Sans Pro\';\n\tfont-weight: 300;\n\tfont-style: \'normal\';\n\tbackground: ', ';\n\tpadding: \'9px 20px 9px 15px\';\n\tmargin-right: 0.7rem;\n\tborder: 1px solid black;\n\tcursor: ', ';  \n\ttext-decoration: none;\n\tuser-select: none;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
	return props.disable ? '#EEEDED' : '#3B97D3';
}, function (props) {
	return props.disable ? 'not-allowed' : 'pointer';
});

exports.default = Button;