// b_15_js_import_data-stateCheck.js

// 외부 문서를 불러오기 
// 1. 생성자함수 XMLHttpRequest(); -> 객체화
// 2. 불러온 함수를 객체화
// 3. 객체 내부의 메소드 
//------------------------------------------------------------------
// 예외처리 : try{} catch(){} finaly{}
// 4. 상태메세지처리 : 연결상태가 어떠한 상태인지 체크 onreadystatechange
//------------------------------------------------------------------
// 5. 문서를 찾아열어주기 : http.open(처리방식method, 연동주소url, 비동기처리허용유부async)
// 6. 문서 처리 : http.send()
//------------------------------------------------------------------
/*
  var linkFn = function(url,method,async){
    var http = new XMLHttpRequest();
    var stateMessage;

    http.onreadystatechange = function(){
      console.log( http.status );
      switch (http.readyState){
        case  XMLHttpRequest.UNSENT:// 0
          stateMessage = '서버와의 데이터 연결 끊어짐'
          break;
        case  XMLHttpRequest.OPENED :// 1
          stateMessage = '서버연결'
          break;
        case  XMLHttpRequest.HEADERS_RECEIVED:// 2
          stateMessage = '서버 접근중, 파일검색중'
          break;
        case  XMLHttpRequest.LOADING:// 3
          stateMessage = '데이터 불러오는 중'
          break;
        case  XMLHttpRequest.DONE:// 4
          stateMessage = '서버와 연결 대기중'
          break;
      }
      if(http.readyState === XMLHttpRequest.DONE){
        console.log( '서버가 이상없이 연결되었음' );
      }
      // console.log( stateMessage);
    }

    var method = method || 'GET'; // 앞의 자료가 undefinded 면 뒤의 값 대체
    var url = url;
    var async = async || true;

    http.open(method, url, async);
    http.send();
  }
  // ------------------------------------------------------
  var method = 'GET';
  var url = '../data/person_card.json';
  var async = true;

  linkFn(url);
*/
// ---------------------------------------------------------
/*
var xhr = new XMLHttpRequest();
// console.log( xhr.onreadystatechange ); // 준비상태의 변화를 감지 - 인식
// console.log( xhr.readyState ); // 준비 상태 - 신호등

xhr.open('GET', '../data/person_card.json', true) // 자료 찾아서 신청
xhr.send();
*/
// --------------------------------------------------------
var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/person_card.json', true) // 자료 찾아서 신청
xhr.send();
setTimeout(function(){
  var data = JSON.parse(xhr.responseText);
  var dataList = [];
  var SetFn = function(title, link){
    this.title = title;
    this.url = link;
  };

  data.forEach(function(value , index){
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);
    dataList.push(obj);
  });

  console.log( dataList[0].title );
},10)
