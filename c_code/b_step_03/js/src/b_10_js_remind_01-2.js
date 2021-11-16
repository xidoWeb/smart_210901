// b_10_js_remind_01-2.js
// console.log( i );


var ar1 = ['딸기','포도','바나나','오렌지'];
var cAr = [];

var arFn = function(arr){
  var arEx = [];
  arr.forEach(function(data, index){
    arEx[index] = data;
  });
  return arEx;
};

cAr = arFn(ar1);

ar1.push('melon');
console.log( ar1 );
console.log( cAr );


var car = ['pony','bmw','granger','audi'];
var car2 = arFn(car);
console.log( car2 );