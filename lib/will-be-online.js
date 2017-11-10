'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isOnline = require('is-online');

var _isOnline2 = _interopRequireDefault(_isOnline);

var _fluture = require('fluture');

var _fluture2 = _interopRequireDefault(_fluture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _fluture2['default'].encaseP(_isOnline2['default']);