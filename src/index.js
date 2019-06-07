"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _sponsors = require("./sponsors");

var _employers = _interopRequireDefault(require("./employers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var makeBusiness =
/*#__PURE__*/
function () {
  function makeBusiness(owner, cash, emp, sponsors) {
    var director = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Victor';

    _classCallCheck(this, makeBusiness);

    this.director = director;
    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.sponsors = sponsors;
  }

  _createClass(makeBusiness, [{
    key: "say",
    value: function say() {
      var _console;

      var sumSponsors = [].concat(_toConsumableArray(this.sponsors.eu), _toConsumableArray(this.sponsors.rus), ['unexpected sponsor']);
      console.log('We have a business. Owner: ' + this.owner + ', director: ' + this.director + '. Our budget: ' + this.cash + '. And our employers: ' + this.emp);
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log('Note. Be careful with ' + this.sponsors.eu[0] + ". It's a huge risk.");
    }
  }]);

  return makeBusiness;
}();

var makeIt = new makeBusiness('Sam', _sponsors.money, _employers.default, _sponsors.sponsors);
makeIt.say();