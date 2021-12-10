// d_05_promise_ex_01.js

// 시나리오:
// 국어/영어/수학 값을 모두 합쳐서 결과도출
// 1. 점수입력후 버튼 클릭
// 2. 해당하는 값 모두 합
// 3. 합 + 5
// 4. 결과 * 5
// 5. 최종점수 도출 ( .result>span 도출 )
// * 값 입력이 안되어있다면 입력요구
// * 0~5점 이하의 결과로 도출
// ================================================
// 변수
const testBox = document.querySelector('#testBox');
const elKorean = document.querySelector('#korean');
const elEnglish = document.querySelector('#english');
const elMath = document.querySelector('#math');
const btn = testBox.querySelector('button');
const result = testBox.querySelector('.result > span');
// ------------------------------------------------------
const fnRel = function(score, score2){
  const _n = parseInt(score);
  const nanCheck = isNaN(_n) === false;
  const numArea = _n >= 0 && _n <= 5;
  let _n2 = score2 || 0; 

  const sendData = new Promise(function(resolve, reject){
    if(nanCheck && numArea){
      const nRel = _n + _n2;
      resolve(nRel);
    }  else {
      reject('숫자를 다시한번 정확하게 입력해주세요.') ;
    } 
  });
  return sendData;
};

const fnSubject = function(n, i, j){
  fnRel(n)
      // 값을 전달 받았을때 (ok) 
      .then(function(rel1){
        return fnRel(i, rel1);
      }).then(function(rel2){
        return fnRel(j, rel2);
      }).then(function(rel3){
        const numResult = (rel3 + 5 ) * 5;
        result.innerHTML = numResult;
      })
      // 값에 에러가 났을때 (reject)
      .catch(function(error){
        result.innerHTML = error;
      })
};

// ------------------------------------------------------
// 이벤트
btn.addEventListener('click', function(e){
  e.preventDefault();
  const [kr, en, mt] = [elKorean.value, elEnglish.value, elMath.value];
  fnSubject(kr, en, mt); 
});



// promise 어떠한 값을 순차적으로 진행 할 수 있도록 만드는 기능
// 즉, 비동기처리시 콜백함수의 기능을 사용하지않고 수행할 수 있도록 만드는 역할

// Promise는 
// 1. 생성자 함수이며, 받아들이는 값은 1:resolve(성공), 2:reject(실패)
// 2. 생성자함수에의한 결과를 다음 작업을 수행하도록 하는 메소드( .then() )
// 3. then에 들어가는 인자는 성공의 결과로서 이전에 처리된 기능의 결과물을 담는다.
// 4. 이후에도 then에 관련내용을 수행하고 다시 그다음 수행을 하려면
// 5. 뒤에 .then을 이어 붙여서 사용하게 만들면 된다.
// 6. 만약 promise함수에서 reject를 도출시켰다면 .then()이아닌 .catch() 메소드를 수행
// 7. catch메소드에서는 error인 결과물을 수행하게 만들거 처리하게 된다.
// 8. 성공여부를 떠나서 무조건 적인 결과를 수행해야 하는 상황인 경우에는 .finaly() 메소드를 수행