

// b_01_js_variable.js
/**
 * js는 ;의 의미가 해당 기능/내용의 종료를 의미
 * js는 (), {}, [] ... 각종 괄호의 기능이 
 * 또한, '', "" 기능이 수시로 열고/닫기 기능이 빈번하게 그리고 복잡하게 엃혀있다. 
 */


var num = 0;
var n;
    n = 10;
var a = 1;
var b = 1;
var c, d;
    c = 1, d=1;
var nText = 'num: ';

// console.log(num, n, a, b, c, d);
// console.log(nText, num);
console.clear();
    
// 예약어 : 변수명으로 사용할 수 없는 용어는 미리 선정해놓은 용어 
// 예약어 후보 : name
/** 예약어 및 키워드

  abstract, arguments , boolean , break , byte, case  , catch , char  , class*  , const, continue  , debugger  , default , delete  , do, double  , else  , enum* , eval , export*, extends*  , false , final , finally , float, for , function  , goto  , if  , implements, import* , in  , instanceof  , int , interface, let , long  , native  , new , null, package , private , protected , public  , return, short , static  , super*  , switch  , synchronized, this  , throw , throws  , transient , true, try , typeof  , var , void  , volatile, while , with  , yield

 * // *는 ES6에서 추가된 예약어
 * 위 예약어 및 키워드 외에도 매~~~우 많으로 변수명을 설정하는 가장 쉬운방법은
 * 1. 의미없는 변수는 사용하지 말것 (단, 숫자나 단순 값을 가져오기 위한 상황 제외)
 * 2. 각 변수를 'camelCase방식'으로 사용할것 
 * 3. js에서는 대시라인방식(-), 언더스코어(_) 방식의 이름을 권장하지 않음
 *
 * - ;사용위치  
 * 1. 변수 할당 또는 변경;  
 * 2. 함수수행(); , 객체.메소드();
*/

// ---------------------------------
fn();

console.log( text );
var text = '글자입력';

function fn(){
  console.log( ' 호출!!!! ' );
}

fn();

/*  
 * hoist 현상이란, 변수 또는 함수를 만들때
생성된 위치보다 이전에 호출/수행하면 그 내용이 
에러가 아니라, 무언가를 도출되게 만든다는 것
변수/함수가 이름이/기능이 상단으로 가상으로 끌어올려져서 처리되기때문에.

그래서: 작업의 순서를 어느정도 지켜서 쓰는것이 좋다!
  1. 변수 선언
  2. 함수 정의
  3. 기능 구현
*/


//  1. script의 작성위치는 body의 끝(바로전)에 src속성으로 불러오기
//  2. 주석은 한줄주석 (//), 여러줄 주석(/* */)
//  3. 변수 선언은 var 를 먼저 선언(한번 선언한 이름은 다시 var를 사용하지 않음)
//  4. ;작성위치 - 변수 선언 또는 값 대입시, 함수실행, 메소드 실행
//  5. 변수는 일부 사용되는 용어를 피해서 작성
//  6. 호이스트 현상이 있으니(변수를 선언하기도 전에 해당 변수가 미정의 되었다! 라는 의미) 유의
//  7. js는 다소 복잡한 구조들로 보이고 혼란 있을 수 있으니 꼭 들여쓰기, 괄호체크 필수!!!!!!!!!!!!!

//  + - / * %
// 숫자/문자/true/false
// =, ==, ===, !=, !==, !, !!...
