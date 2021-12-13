"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.array.concat.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// d_08_for_of.js
var _require = require("lodash"),
    forEach = _require.forEach;

var arr = [1, 2, 3, 4, 5, 6, 7, '-----'];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function (data) {
  console.log(data);
}); // for-of문은 해당하는 변수의 값이 순환처리가 되어야 동작

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var _i2 = _arr[_i];
  console.log(_i2);
} // ----------------------------------------------------


var text = 'javascript'; // console.log( text[1] );
// for(let i=0; i<text.length; i++){
//   console.log( text[i]);
// }

var _iterator = _createForOfIteratorHelper(text),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _i5 = _step.value;
    console.log(_i5);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var obj = {
  'samsung': 'galaxy',
  'apple': 'iphone',
  'lg': 'wing',
  'nokia': 'N serize'
}; // for( var i in obj){
//   console.log( i );
// }
// 객체를 순환하기 위해 처리하는 메서드( keys, values, entries )

var key = Object.keys(obj);
var val = Object.values(obj);
var ent = Object.entries(obj); // console.log( key, val );
// console.log( ent );

for (var _i3 = 0, _ent = ent; _i3 < _ent.length; _i3++) {
  var _ent$_i = _slicedToArray(_ent[_i3], 2),
      _i4 = _ent$_i[0],
      v = _ent$_i[1];

  console.log("".concat(_i4, " : ").concat(v));
}