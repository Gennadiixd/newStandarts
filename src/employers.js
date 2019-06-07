"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = [];
employersNames = employers.filter(function (el) {
  return el.length > 0;
});

var _default = employersNames = employersNames.map(function (el) {
  return el.toLowerCase().trim();
});

exports.default = _default;