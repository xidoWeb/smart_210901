// b_08_js_repeat2.js

// for( in ){} ---------------------------------------

// for(임의변수 in 객체){}
/* 
  // 나쁜 예
  var arr = ['딸기', '바나나', '키위', '수박' ,'포도'];
  for(var sam in arr){
    console.log( arr[sam] );
  }
*/

var obj = {
  '딸기'   : 'red',
  '바나나' : 'yellow', 
  '키위'   : 'brown', 
  '수박'   : 'green',
  '포도'   : 'purple'
};

var sample;
for(sample in obj){
  console.log(sample + ':' + obj[sample]);
}

// for:범용처리 단 객체는 불가능, for-in: 객체를 순환하기위해사용하는 

// forEach -----------------------------------------
// 배열.forEach()
var arr = ['딸기', '바나나', '키위', '수박' ,'포도'];
/*
var i=0;
var arrLen = arr.length;
for (; i<arrLen; i+=1){
  console.log(arr[i]);
}
*/

arr.forEach( function(el, n){ // forEach는 들어오는 인자의 첫번째는 값, 두번째는 순서
  console.log( n, el );
});

var ul = document.querySelectorAll('ul')[0];
var li = ul.children;

console.log(arr);
console.log(li);

// for는 기본 문법, forEach() 메서드
// ------------------------------------------------

// for, for-in, forEach