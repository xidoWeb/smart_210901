// b_15_import_data.js

// XMLHttpRequest: 네트워크(웹)를 통한 자료 요청기술
// method : GET(단순히 자료를 요청하여 가져오는 기술) , POST(생성)
var xhr = new XMLHttpRequest();
var method = 'GET';
var url = '../data/sample.txt';
var async = true; // 비동기승인(비동기처리를 할것인가?)

// 자료를 요청
// xhr.open(method방식, 처리할파일경로 , 비동기승인여부);
xhr.open(method, url, async);

// <- 응답처리 내용(보류)

// 자료 요청받은 자료를 받기
xhr.send();

setTimeout(function(){
  console.log( xhr.responseText );
}, 10);

// 네트워크 상태 표시 