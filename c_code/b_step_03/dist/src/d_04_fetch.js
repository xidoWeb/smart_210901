// d_04_fetch.js

/*
  // 기존 data 불러오기 : XMLHttpRequest()
  // http.open(method, url, async);
  // 버튼 클릭시 관련 자료만 모아서 pre요소에 담기

  // 변수 : 
  const http = new XMLHttpRequest();
  const elBtn = document.querySelector('button');
  const elPre = document.querySelector('pre');

  // 기능/함수
  const dataList = function(){
    http.open('GET', '../data/person_card.json', true);
    http.onreadystatechange = function(){
      const state = http.readyState;
      if( state === XMLHttpRequest.DONE ){ // 요청이 끝나면
        const sta = http.status;
        if( sta >=200 && sta < 400 ){ // 200~399 -> 데이터 전송이 성공하면
          // console.log( http.response);
          // return http.response;
          elPre.innerText = http.response;
        }
      }
    }
    http.send();
  };


  // 이벤트 :
  elBtn.addEventListener('click', function(e){
    e.preventDefault();
    dataList();
    // console.log( getData );
  });

*/


// ----------------------------------------------------
const elBtn = document.querySelector('button');
const elPre = document.querySelector('ul');
let url = "../data/person_card.json";

class dataInsert {
  constructor (title, image){
    this.cardTitle = title;
    this.imageUrl = image;
  }
}

const fnGetData = jsonData => {
  console.log( jsonData )
  const dataList = [];
  const data = jsonData;
  data.forEach( data => {
    let objD = new dataInsert(data.title, data.image);
    dataList.push(objD);
    const mkLi = document.createElement('li');
    mkLi.innerText = objD.cardTitle;
    elPre.append(mkLi);    
  });
}

// const fnFetch = function(path){
//   fetch(path).then(function (response) {
//     return response.json();
//   }).then(function (data) {
//     fnGetData(data);
//   });
// };

// let url = "../data/person_card.json"; -> url 이 아래 path로 들어가는 매개변수
const fnFetch = path => {
  fetch(path) //주소값을 넣어서 그것의 결과를 받아서 then으로 넘김
  .then( response => { // 넘겨받은 data중에서 일부 정제해서 다음 then으로 넘기위한 기능
    // console.log( response.json() );
    return response.json(); // 받은 dta중에서 json내용만 최종 처리하는 함수
  })// 정제된 data를 다음 then으로 넘김
  .then( fnGetData ); // 넘겨받은 data를 fnGetData함수에 전달
};

const fnEvent = e => {
  e.preventDefault();
  fnFetch(url);
};

// 이벤트
// elBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   fnFetch(url);
// });

elBtn.addEventListener('click', fnEvent );

// 외부문서불러오기
// fetch          // 자료요청을 위해 주소를 보내서 처리된 것을 then으로 넘김
// then           // 이전기능에서 넘겨받은 자료를 수행하는 메소드(이전내용이 처리되어야 동작함)
// response.json() // 응답받은 data중 json내용만 찾아내는 메소드
// --------------------------------------------------------------------------------------------
// 1. 어떠한 자료주소(json주소)를 가져와라    // fetch(json주소)
// 2. 그리고난 후 다음기능을 처리 - (json파일을 정리해서 보내라) // .then()
// 3. 그리고난 후 다음기능 수행(우리가 수행해야하는 기능) // .then()
//  fetch(주소).then().then()
// --------------------------------------------------------------------------------------------

// Promise, then