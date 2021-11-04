// b_02_js_data_type.js
// 형타입을 파악하는 :  typeof(literal)

// 숫자(number)
var num = 7;
var num2 = num;
    num = 10;

console.log(  num, typeof(num)  );
console.log(  num2, typeof(num2)  );

// 문자(string)
var str = '123';
var str2 = str; // str2 = 123 
    str = '문자'; // str2 = 123

console.log( str, typeof(str) );
console.log( str2, typeof(str2) );

var str3 = str2 + 567; // 문자 + 숫자 -> 문자의나열 -> '123' + 567 -> 123567
console.log( str3 );
var str4 = parseInt(str2) + 567;
console.log( str4 );

// 논리(boolean)



// undefined
// null
// object
// array
// function