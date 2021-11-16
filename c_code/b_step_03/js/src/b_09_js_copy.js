// b_09_js_copy.js

var favoritColor = ['emerald green', 'coral','hot pink','city blue', 'brown gray'];
var copyColor = favoritColor; // 같은 주소지를 공유
favoritColor.push('yellow');
// console.log(favoritColor, copyColor);

var cloneColor = [];
// coloneColor와 favoritColor의 값이 동일하게 만들고, 
// 이후에 favoritColor.push('sky'), cloneColor.push('deep orange');

// ['emerald green', 'coral','hot pink','city blue', 'brown gray','yellow','sky']; -> favoritColor
// ['emerald green', 'coral','hot pink','city blue', 'brown gray','yellow','deep orange']; -> cloneColor


// 방법 1-----------------------------------
/*
  cloneColor.push(favoritColor[0]);
  cloneColor.push(favoritColor[1]);
  cloneColor.push(favoritColor[2]);
  cloneColor.push(favoritColor[3]);
  cloneColor.push(favoritColor[4]);
  cloneColor.push(favoritColor[5]);

  favoritColor.push('sky');
  cloneColor.push('deep orange');

  console.log(favoritColor, cloneColor);
*/

var i = 0;
var len = favoritColor.length;
// 방법2 -------------------------
/*
for(; i <= len; i+=1){
  cloneColor.push(favoritColor[i]);
}
favoritColor.push('sky');
cloneColor.push('deep orange');
*/

// 방법3 -----------------------
/* 
for(; i <= len; i+=1){
  if(i !== len){
    cloneColor.push(favoritColor[i]);
  }else{
    favoritColor.push('sky');
    cloneColor.push('deep orange');
  }
}
*/
// 방법 4 ----------------------------------

favoritColor.forEach(function(data, index){
  // cloneColor[index] = favoritColor[index];
  // cloneColor.push(data);
  cloneColor[index] = data;
});
favoritColor.push('sky');
cloneColor.push('deep orange');

// console.log(favoritColor, cloneColor);


// ==============================================================
var pc = {
  'dell'    : '프리시전',
  'hp'      : 'z시리즈',
  'apple'   : 'mac book',
  'samsung' : 'galaxy book'
}; 
var copyPc = pc;
// pc.lg = 'gear';
pc['lg'] = 'gear';
// console.log( copyPc );

var clonePc = {};
// 결과
// { 'dell' : '프리시전', 'hp' : 'z시리즈', 'apple' : 'mac book', 'samsung' : 'galaxy book', 'lg':'gear',asus:'gen book' } -> pc
// { 'dell' : '프리시전', 'hp' : 'z시리즈', 'apple' : 'mac book', 'samsung' : 'galaxy book', 'lg':'gear',lenovo: 'think pad' } -> clonePc

// 객체 방법1 --------------------
/*
clonePc['dell'] = '프리시전';
clonePc['hp'] = 'z시리즈';
clonePc['apple'] = 'mac book';
clonePc['samsung'] = 'galaxy book';
*/

for(var data in pc){
  // console.log( data );
  clonePc[data] = pc[data];
}

pc['asus'] = 'gen book';
clonePc['lenovo'] = 'think pad';

console.log(pc);
console.log(clonePc);
console.clear();
// 참조 주소를 복사하는 것 - 얕은 복사(shallow copy)
// 참조 주소에 있는 값 자체를 복사 - 깊은 복사(deep copy)

// --------------------------------------------------------
// var cookie = ['초코칩','칙촉','빼빼로','호빵','촉촉한초코칩','칸쵸','홈런볼','엄마손'];
// var snack = { '농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도' };
