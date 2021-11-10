// b_05_js_condition.js
// 문법


/*
switch (매개변수) {
  case 조건값1:
    조건값과 매개변수가 일치하면 수행
  break;
  case 조건값2:
    조건값과 매개변수가 일치하면 수행
  break;
  default:
    위 조건들이 일치하지 않으면 수행
}
*/

var rel = true;
var d = [];

switch (rel) {
  case true:
    d.push('true 1');
  // break; 
  // break는 더이상 해당조건을 수행하지 않고, switch 문법을 종료!
  case false:
    d.push('false 1');
  // break;
  default:
    d.push('end');
}
console.log(d);


var num = 4;
var data = [];
var atmFn = function (num) {
  switch (num) {
    case 1:
      data.push('현금 입금');
      atmFn(2);
      break;
    case 2:
      data.push('통장 확인');
      break;
    case 3:
      data.push('타계좌 송금');
      atmFn(2);
      break;
    case 4:
      data.push('통장 삭제');
      atmFn(2);
      break;
    default:
      data.push('대출(연 60%)');
      atmFn(2);
  }
};
atmFn(1);
console.log(data);

// ---------------------------------------------
console.clear();

//a: 편의점에서 물건을 살경우
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 카드 결재를한다.
// 4. 물건과, 카드를 돌려받는다.
// 5. 내역을 확인한다.

//b: 편의점에서 공병을 팔경우
// 1. 물건을 낸다
// 2. 카드를 낸다.
// 3. 카드 입급을 받는다.
// 4. 카드를 돌려받는다.
// 5. 내역을 확인한다.

//c: 편의점에서 물건을 환불
// 1. 물건을 건넨다.
// 2. 카드를 낸다.
// 3. 카드 입금을 받는다(취소)
// 4. 카드를 돌려받는다
// 5. 내역을 확인한다.

//d: 편의점 결재가 안될때
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 결재 에러발생
// 4. 카드 돌려받는다.
// 5. 내역을 확인한다.

var storeList = [];
var i = 0;
// ------------------------------------------

var setFn = function (selector) {
  var userStep = [];
  var storeSelectFn = function (selector) {
    switch (selector) {
      case 'a':// 물건을 살경우
        storeSelectFn('send');
        userStep.push('3. 카드 결재를한다.');
        storeSelectFn('return');
        break;
      case 'b':// 공병을 팔경우 
        storeSelectFn('send');
        userStep.push('3. 카드 입급을 받는다.');
        storeSelectFn('return');
        break;
      case 'c':// 환불
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다(취소처리).');
        storeSelectFn('return');
        break;
      case 'd':// 결재가 안될때
        storeSelectFn('send');
        userStep.push('3. 결재 에러발생');
        storeSelectFn('return');
        break;
      case 'send':
        userStep.push('1. 물건을 건넨다.', '2. 카드를 낸다.');
        break;
      case 'return':
        userStep.push('4. 카드를(물건이 있다면 물건과 함께) 돌려받는다.', '5. 내역을 확인한다.');
        break;
      default:
        userStep.push('사용기록 없슴.');
    }
    return userStep;
  };
  storeSelectFn(selector);
  // console.log(userStep);
  return userStep;
}; // setFn();

// ------------------------------------------
var storeFn = function (selector, user) {
  var userCheck = {}; //{name:'사용자', content: []};
  var userStep = [];
  // ------------------------------
  userStep = setFn(selector);
  // ------------------------------
  i += 1;
  userCheck.name = user || 'noNameUser_' + i;
  userCheck.content = userStep;
  storeList.push(userCheck);
  return userCheck;
};// storeFn();
// ------------------------------------------
console.log(storeFn('a'));
console.log(storeFn('b', 'user2'));
// console.log(storeFn('c'));
// console.log(storeFn('d', 'user4'));
console.log(storeList);
