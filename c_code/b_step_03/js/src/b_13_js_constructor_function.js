// b_13_js_constructor_function.js

// 생성자 함수를 제작하려면, 함수의 이름이 PascalCase기법으로 처리


// var user = {};
// user.name = 'xido';
// user.age = 20;
// user.email = 'ido@naver.com';
// console.log( user );


var UserSetting = function(userName, userAge, userEmail){
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
};

// console.log( this.location );
// window.console.log( 'console 결과' );
// this.console.log( 'console 결과' );

// 인스턴스처리 : 기존에 만든 함수의 기능을 복제-객체로변환 (new 연산자)
var user1 = new UserSetting('xido', 30, 'xido@gmail.com'); 
user1.name = 'myX';
console.log( user1);

var user2 = new UserSetting('puppy', 10);
console.log( user2.email );

// prototype : 생성자에 담길 내용에 대한 별도의 처리되는 기본 객체
UserSetting.prototype.group = '가족 명단 체크';

console.log( user1 );

UserSetting.prototype.trueCkeck = function(){
  return this.age / 2;
};

console.log(user1.trueCkeck());

console.clear();
// this : window
console.log( this );

// this : 객체 이름
var ObjFn = function(a){
  this.alpha = a;
}
var alpha = new ObjFn('abcd');
console.log( alpha.alpha );

// this