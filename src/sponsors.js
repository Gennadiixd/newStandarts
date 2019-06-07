"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

var calcCash = function calcCash() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$own = _ref.own,
      own = _ref$own === void 0 ? 0 : _ref$own,
      _ref$sponsorsCash = _ref.sponsorsCash,
      sponsorsCash = _ref$sponsorsCash === void 0 ? 0 : _ref$sponsorsCash;

  var total = own;

  for (var i = 0; i < sponsorsCash.length; i++) {
    total += +sponsorsCash[i];
  }

  return total;
};

var money = calcCash({
  sponsorsCash: sponsors.cash
});
exports.money = money;