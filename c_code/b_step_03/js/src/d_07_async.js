"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// d_07_async.js
var fnTest = function fnTest() {
  return 'test';
}; // const fnTest = () => 'test';


console.log(fnTest()); // -----------------------------------

var fnPromi = function fnPromi() {
  return new Promise(function (resolve, reject) {
    resolve('test2');
  });
};

console.log(fnPromi());
fnPromi().then(console.log); // -----------------------------------

function fnTest3() {
  return _fnTest.apply(this, arguments);
}

function _fnTest() {
  _fnTest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", 'test3');

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fnTest.apply(this, arguments);
}

;
console.log(fnTest3());
fnTest3().then(console.log); // -----------------------------------

var fnTest4 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", 'test4');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fnTest4() {
    return _ref.apply(this, arguments);
  };
}();

console.log(fnTest4());
fnTest4().then(console.log); // ----------------------------------

function fnTest5() {
  return _fnTest2.apply(this, arguments);
} // function fnTest5(){
//   return Promise.resolve('test5').then(() => undefined);
// }


function _fnTest2() {
  _fnTest2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return console.log('test5');

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fnTest2.apply(this, arguments);
}

fnTest5(); // const A = new Promise();
// const B = new Promise();
// A.then().then(B).then().then();  -> Promise를 통해 순차기능을 수행시
// const C = async ()=>{}
// const D = async ()=>{}
// const fnF = async function(){
//   await C(); // c 먼저 수행
//   await D(); // c 수행 후 D수행
// }