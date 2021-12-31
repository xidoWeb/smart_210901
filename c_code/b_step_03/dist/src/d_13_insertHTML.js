// d_13_insertHTML.js

//  element.innerHTML

const elFootBox = document.querySelector('#footBox');
const elFootH   = elFootBox.querySelector('h2');
let n = 0;
const code = ()=> `<span>추가된 코드_${ n+=1 }</span><br />`;

// elFootH.innerHTML = code;
// elFootH.insertAdjacentHTML([option],code);
// 선택자.insertAdjacentElement(옵션, 생성된Element)
// 옵션 : 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
const option = [ 'beforebegin', 'afterbegin', 'beforeend', 'afterend' ];

elFootH.insertAdjacentHTML(option[0], code() );
elFootH.insertAdjacentHTML(option[1], code() );
elFootH.insertAdjacentHTML(option[2], code() );
elFootH.insertAdjacentHTML(option[3], code() );