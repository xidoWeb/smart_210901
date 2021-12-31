// d_13_class2.js

// 변수 선택
const userId       = document.querySelector('#userId');
const userPw       = document.querySelector('#userPw');
const userRemember = document.querySelector('#userRemember');
const submitBtn    = document.querySelector('button[type="submit"]');
const pwViewBtn    = document.querySelector('.pw_view');

//---------------------------------------------------

class CheckMember {
  constructor (id, pw, option){
    this.id     = id,
    this.pw     = pw,
    this.remember = option
  }
};

//-------------------------------------------------------------------
// 이벤트

// 비밀번호확인버튼 클릭시 비번 확인
pwViewBtn.addEventListener('mousedown', (e)=>{
  e.preventDefault();
  // 왼버튼 클릭 확인 (e.button에서 0번)
  if( e.button === 0 ){ userPw.type = 'text'; }
}); 
pwViewBtn.addEventListener('mouseup', (e)=>{
  e.preventDefault();
  userPw.type = 'password'
}); 
pwViewBtn.addEventListener('mouseleave', (e)=>{
  e.preventDefault();
  userPw.type = 'password'
});


// data 전송시 객체로 처리
submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const sendData = new CheckMember(userId.value, userPw.value, userRemember.checked);
  console.log( sendData );
}); 