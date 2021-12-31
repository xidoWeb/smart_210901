// d_13_class2.js

// 변수 선택
const userId       = document.querySelector('#userId');
const userPw       = document.querySelector('#userPw');
const userRemember = document.querySelector('#userRemember');
const submitBtn    = document.querySelector('button[type="submit"]');
//-------------------------------------------------------------------

class CheckMember {
  constructor (id, pw, option){
    this.id     = id,
    this.pw     = pw,
    this.remember = option
  }
};

//-------------------------------------------------------------------
// 이벤트
submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const sendData = new CheckMember(userId.value, userPw.value, userRemember.checked);
  console.log( sendData );
}); 