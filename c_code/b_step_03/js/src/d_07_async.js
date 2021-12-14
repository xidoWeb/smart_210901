"use strict";

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.concat.js");

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

function timed() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('time');
    }, 500);
  });
}

function fn1() {
  return _fn.apply(this, arguments);
}

function _fn() {
  _fn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return timed();

          case 2:
            return _context4.abrupt("return", 'one');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fn.apply(this, arguments);
}

function fn2() {
  return _fn2.apply(this, arguments);
}

function _fn2() {
  _fn2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return timed();

          case 2:
            return _context5.abrupt("return", 'two');

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fn2.apply(this, arguments);
}

function fn3() {
  return _fn3.apply(this, arguments);
}

function _fn3() {
  _fn3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return timed();

          case 2:
            return _context6.abrupt("return", 'three');

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _fn3.apply(this, arguments);
}

function fnRel() {
  return _fnRel.apply(this, arguments);
}

function _fnRel() {
  _fnRel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var a, b, c;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return fn1();

          case 2:
            a = _context7.sent;
            _context7.next = 5;
            return fn2();

          case 5:
            b = _context7.sent;
            _context7.next = 8;
            return fn3();

          case 8:
            c = _context7.sent;
            return _context7.abrupt("return", "".concat(a, " + ").concat(b, " + ").concat(c));

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _fnRel.apply(this, arguments);
}

fnRel().then(console.log); // 순차 수행을 원할하게 처리하기 위해 나온 기능
// Promise - Promise, fetch, async/await  + then()