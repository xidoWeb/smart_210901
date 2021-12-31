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
const fnPwType = (e) => {
  e.preventDefault();
  ( e.button === 0 && e.type === 'mousedown' )? userPw.type = 'text': userPw.type = 'password';
};

const fnEvent = (element, handlerType, fn) => {
  handlerType.forEach( handler =>{
    element.addEventListener( handler , (e) => {
      fn(e);
    });
  });  
};
//-------------------------------------------------------------------
// 이벤트
// 비밀번호확인버튼 클릭시 비번 확인
// pwViewBtn.addEventListener('mousedown', fnPwType); 
// pwViewBtn.addEventListener('mouseup', fnPwType ); 
// pwViewBtn.addEventListener('mouseleave', fnPwType );
fnEvent(pwViewBtn,['mousedown', 'mouseup', 'mouseleave'],  fnPwType);

// data 전송시 객체로 처리
submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const sendData = new CheckMember(userId.value, userPw.value, userRemember.checked);
  console.log( sendData );
});



const fnMkScript = (file)=>{
  const mkScript = document.createElement('style');
  mkScript.setAttribute('class', 'box');
  mkScript.setAttribute('src', file);
};

const fnMakeEl = (el, attr, text)=>{
  const element = document.createElement(el);
  let check;
  let name;
  if(!!attr){
    if(attr[0] === '.'){ 
      check = 'class';
      name = attr.slice(1);
    }else if(attr[0] === '#'){
      check = 'id';
      name = attr.slice(1);
    }else{
      check = 'data-type';
      name = attr;
    }
    element.setAttribute(check, name);
  }
  element.innerText = text;
  console.log( element );
}

fnMakeEl('div', null, 'lorem text');
