// b_03_operation.js

// 사칙연산 =======================================
var n = 10;

// 함수를 만들어서 기본n의 값과, 적용할 변수의 값을 비교하는 함수
var nFn = function(data){
  return console.log( n, data );
};
nFn();

var plus = n + 10;
nFn(plus);

var minus = n - 5;
nFn(minus);

var divide = parseInt(n / 3);
nFn(divide);

var multi = n * 6;
nFn(multi);

var remainder = n % 3;
nFn(remainder);

var nReset = n = n + 10;
// n + 10 (기존 10에 10을 더해서) -> 변수 n에 재할당 -> nReset에 값을 담겠다.
nFn(nReset);

n = n + 20; // 40
n = n + 100;// 140
nFn();

// 자신에게 값을 할당/연산
n += 60;  // n = n + 60;
nFn();

n -= 10;  // n = n - 10;
nFn();

// 자신에게 * 2배
n *= 2;  // n = n * 2;
nFn()

// 자신에게  / 9
n /= 9; // n = n / 9;
nFn();

n = parseInt(n);
n %= 5;
nFn();

// 할당연산자 : 자신의 값을 이용하여 대입처리하고자 할때 사용.

// 증감연산자 =======================================
console.clear();
nFn();

n += 1;
nFn();

n++; // 결과도출후 1더하기
nFn();
nFn(n++);
nFn(n++);
nFn(n++);
nFn(n++);
nFn();

++n; // 1더하기 후 결과도출
nFn();
nFn(++n);
nFn(++n);
nFn(++n);
nFn();




// 삼항연산자 =======================================

// 비교연산자 =======================================