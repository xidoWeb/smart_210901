// d_02_esnext_destructur.js
// 비구조화할당(destructuring assignment)
// 배열/객체 의 형태를 해체하여, 각각을 변수에담아 사용하는 표현식

const fruits = ['banana', 'apple', 'graph', 'kiwi'];

// const summer = fruits[0];
// const apple = fruits[2];

let [ba, ap, gh, kw] = fruits;

// ---------------------

const obj = {
  'music':'mp3',
  'mouse':'track ball',
  'keyboard':'mechanic'
};

let {music, mouse, keyboard} = obj;

// --------------------

{
  let i = 0;
}

// 얕은복사 : 참조변수의 위치를 할당
const arrFruits = fruits;
const arr2Fruits = [];

// ------------------------------------

// 깊은 복사 수행1
for(let i=0; i<fruits.length; i++){
  arr2Fruits[i] = fruits[i];
}

fruits[5] = 'orange';
console.log( fruits );
console.log( arr2Fruits );
// -----------------------------------
// 깊은복사 수행 1-2
// 스프레드 오퍼레이터 (전개 연산자)
const arrCopyFruits = [...fruits];
console.log(arrCopyFruits);

// -----------------------------------
// 깊은복사 수행 2

const obj2 = {};

for(let prop in obj){
  obj2[prop] = obj[prop];
}

obj.monitor = '120Hz';
console.log( obj );
console.log( obj2 );

// ---------------------------------
// 깊은 복사 수행 2-2
const obj3 = {...obj};
console.log( obj3 );

// --------------------------------
// 비구조할당 변수명 : 배열형식으로 모아 담기
const arrItBrand = ['samsung','lg','logitech','ms','apple'];
const [korea1, korea2, ...otherContry] = arrItBrand;
console.log(otherContry);

//--------------------------------
// 비구조할당 : 배열값을 전달하면서 추가로 변수명에 값 채우기(일반변수)
let [k1, k2, a1, a2, a3 = 'google', f1 = 'nokia'] = arrItBrand;
console.log( a3, f1);
console.log(arrItBrand);

// let a3 = 'google', f1 = 'nokia'
//--------------------------------
const samsungPhone = {
  company : 'samsung',
  brand : 'galaxy'
};
const smartphone = {
  ...samsungPhone,
  makeYear : 2021,
  keyCode : 's21',
  type : 'bar'
};
const smartphone2 = {
  ...samsungPhone,
  makeYear : 2020,
  keyCode : 's20',
  type : 'flip'
};
const smartphone3 = {
  ...samsungPhone,
  makeYear : 2019,
  keyCode : 'tab s6',
  type : 'tablet'
};

console.log( smartphone3);

//--------------------------

//  let i = 0;
//  let permission = true;
//  let optionCheck = 'on';

let [i, permission, optionCheck] = [0, true, 'on'];
