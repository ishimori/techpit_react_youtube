"use strict";

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reduce-right.js");

require("core-js/modules/web.immediate.js");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxFileName = "C:\\Users\\tatun\\techpit_react_youtube\\src\\entries\\sample.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootEl = document.getElementById('root');

_reactDom.default.render( /*#__PURE__*/_react.default.createElement("h1", {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, "hello react."), rootEl);
