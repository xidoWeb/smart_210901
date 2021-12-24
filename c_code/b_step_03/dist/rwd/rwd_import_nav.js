// rwd_import_nav.js

{  
  const path = '../temp/';
  const path2 = '../dist/rwd/';
  const data = {
    mob     : path + 'mobile_rwd_nav.html',
    laptop  : path + 'laptop_rwd_nav.html',
    mobJs   : path2 + 'mobile_header.js',
    laptopJs: path2 + 'laptop_header.js'
  }

  const dlBody = document.querySelector('body');
  const elNav = document.querySelector('#navBox');
  let ckClass;

  const fnMKScript = (url)=>{
    if(!!ckClass){ // .navScript 존재하면 삭제하기 위해 수행
      ckClass = document.querySelector('.navScript');
      ckClass.remove();
    }
    // .navScript 스크립트 삽입
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src', url);
    mkScript.setAttribute('class', 'navScript');
    dlBody.append(mkScript);
  };

  const fnDeviceNav = (type, tScript)=>{ // html 타입, script 타입
    fetch(type)
    .then(response => response.text()) // html 불러오기
    .then(element  =>elNav.innerHTML = element) // 불러온 html삽입
    .then(() => fnMKScript(tScript)) // html형식에 맞는 script코드 삽입
    .then(() => ckClass = document.querySelector('.navScript'))  // 향후 삭제를 용이하게 처리하기 위한 선택자부여
  };

  // fnDeviceNav(data.laptop);
  // ======================================================
  // 브라우저 1024규격을 기준으로 html문서 data.mob / data.laptop의 코드로 확인하여 처리하도록 
  const deviceSize = `screen and (min-width:1024px)`;
  const mediaQuery = window.matchMedia(deviceSize);
  const fnDevice = ()=>{
    (mediaQuery.matches) ? fnDeviceNav(data.laptop, data.laptopJs) : fnDeviceNav(data.mob, data.mobJs);
  }
  fnDevice(); //최초의 상황
  mediaQuery.addEventListener('change', fnDevice); // 변한경우
}

// 각 디바이스 상황에 맞는 js구현 : 하나의 js를 상황에 맞게 알아서 기능이 바뀌게 하는건 어렵다.
