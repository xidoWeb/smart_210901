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
for(; i < len; i+=1){
  cloneColor.push(favoritColor[i]);
}
favoritColor.push('sky');
cloneColor.push('deep orange');
console.log(favoritColor, cloneColor);