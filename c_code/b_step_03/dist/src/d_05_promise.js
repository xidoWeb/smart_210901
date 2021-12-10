// d_05_promise.js
/*
const fnOne = function(data){
  const rel3 = data * data;
  return rel3;
}

const fnTwo = function(data, fn){
  const rel2 = data / 2;
  return fn(rel2);
}

const fnThree = function(data, fn){
  const rel1 = data * 5;
  return fn(rel1, fnOne);
}

let valueReusult = fnThree(4, fnTwo);
console.log( valueReusult );

// button.addEventLister('click', function(){})
*/
/*
  const fn2One =  data => data**2;

  const fn2Two = (data) => {
    const rel = data / 2;
    return fn2One(rel);
  }

  const fn2Three = (data) => {
    const rel = data * 5;
    return fn2Two(rel);
  }

  let valueResult2 = fn2Three(10);
  console.log( valueResult2 );
*/
/* */


// promise
// 1. pending : 진행전/진행중
// 2. fulfilled : 성공
// 3. reject : 실패/오류


/*
const fnDataValue = new Promise((resolve, reject) => {
  setTimeout(function(){
    // resolve('success!');
    reject('내용이 실패!!!');
  }, 500);
});

console.log(fnDataValue)

fnDataValue
  .then((resolve) => { 
    return '성공'; 
  })
  .catch(function(error){  return '실패';  })
  .then(function(data){ return data + ' 하였습니다.';})
  .then(data => console.log( data ) );
*/


// promise는 기능 수행 후
// 다음을 수행


// 실행 컨텍스트 : 브라우저에서 실행되는 순서를 파악하고 처리하는 형태
// 스택 : 수행하는 순서에서 처리되는 모양
// 힙   : 스택과는 별도로 관리하는 것



// ----------------------------------------
/*
const fndata = function(method , url, async) {   
  return new Promise(function(resolve, reject){
    const http =new XMLHttpRequest();
    http.open(method , url, async);
    http.onreadystatechange = function(){
      if(false){
        resolve('success');
      }else{
        reject('falil');
      }
    }
    http.send();
  })
};

fndata('get', 'url', true).then( (resonse)=>{} );
*/


/*
const fn2One =  data => data**2;
  const fn2Two = (data) => {
    const rel = data / 2;
    return fn2One(rel);
  }
  const fn2Three = (data) => {
    const rel = data * 5;
    return fn2Two(rel);
  }
  let valueResult2 = fn2Three(10);
  console.log( valueResult2 );
*/

// Promise 미리 만들어진 생성자 함수
// XMLHttpRequest 미리 만들어진 생성자 함수
// Array, Object, Function ...

const dataCalc = (ins) => {
  const dataResult =  new Promise(function(resolve,reject){
    const convertNum = parseInt(ins); //들어오는 수치를 강제로 숫자처리
    const permission = isNaN(convertNum); // 숫자를 NaN인지 아닌지 파악(NaN이면 true도출)
    (!permission) ?  resolve(ins) :  reject('숫자가 아니니 숫자로 작성해주세요.');
  });
  return dataResult;
};

const fnNum = function(n){
  dataCalc(n)
  .then(function(response){  return response  * 5;  })
  .then(function(response){  return response / 2;  })
  .then(function(response){  return response ** 2;  })
  .then(function( response ){ console.log( response ); })
  .catch(function(error){ console.log( error ); });
};

// -----------------------------------------
const input = document.querySelector('#num');
const btn = document.querySelector('button');

// 버튼 클릭시 input의 값을 파악하여 무언가 연산!!
btn.addEventListener('click', function(e){
  e.preventDefault();
  const _n = input.value;
  fnNum(_n);
});
