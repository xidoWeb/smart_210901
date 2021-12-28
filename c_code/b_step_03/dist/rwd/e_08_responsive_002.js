// e_08_responsive_002.js


// 1. headBox내부에 있는 gnb영역과, nav_btn영역 선택
// 2. mobile버전에서는  nav_btn영역이 존재, pc버전에서는 존재가 필요없으므로 삭제
{
  
  // 선택자 변수
  const elBody     = document.querySelector('body');
  const elHeadBox  = document.querySelector('#headBox');
  const elNavBox   = document.querySelector('#navBox');
  // const elNavTitle = elNavBox.querySelector('h2');
  // const elNavBtn   = elNavBox.querySelector('.nav_btn');
  // const elGnb      = elNavBox.querySelector('.gnb');

  // 각 디바이스 세팅
  // const setDevice = [
  //   {type:'mobile', size:600},
  //   {type:'tablet', size:1024},
  //   {type:'laptop', size:1440},
  //   {type:'pc'}
  // ];

  const setDevice = [ 
    {size:768, type:'mobile', nav:'../temp/e_08_rwd_mob.html', script:'../dist/rwd/e_08_rwd_nav_mobile.js'},
    {          type:'pc',     nav:'../temp/e_08_rwd_pc.html', script:'../dist/rwd/e_08_rwd_nav_pc.js'}
  ];

  const mediaSize = `screen and (max-width:${setDevice[0].size}px)`;
  const mediaMatches = window.matchMedia(mediaSize);
  // ---------------------------------------------------------------
  // 기능 함수

  const fnMkScript = (data)=>{
    const ckScript = document.querySelector('.navScript');
    if(!!ckScript){ ckScript.remove(); }

    const mkScript = document.createElement('script');
    mkScript.setAttribute('src', data);
    mkScript.setAttribute('class', 'navScript');
    elBody.append(mkScript);
  };


  const fnCheckHeader = (type = mediaMatches.matches)=>{
    if(type){
      console.log( 'mobile 버전');
      
      fetch(setDevice[0].nav)
      .then( response=> response.text() )
      .then( data=> { elNavBox.innerHTML = data })
      .then( ()=> { fnMkScript(setDevice[0].script ) })

    }else{
      console.log( 'pc 버전');

      fetch(setDevice[1].nav)
      .then( response=> response.text() )
      .then( data=> { elNavBox.innerHTML = data })
      .then( ()=> { fnMkScript(setDevice[1].script ) })

    }
  };

  fnCheckHeader(mediaMatches.matches);
  // -----------------------------------------------------------
  // 이벤트 체크
  mediaMatches.addEventListener('change', (e)=>{
    // location.reload();
    fnCheckHeader(e.matches);
  });

}

