// e_03_axis.js

/**
 * 마우스 움직였을 경우 해당위치의 좌표 파악
 */

const elWrap = document.querySelector('#wrap');
const elBox = elWrap.querySelector('.box');

// 이벤트 -------------------------
elWrap.addEventListener('mousemove', (e)=>{
  // console.log('clientX'  , e.clientX   );
  // console.log('layerX'   , e.layerX    );
  // console.log('movementX', e.movementX );
  console.log('clientY:' , e.clientY, 'pageY:', e.pageY    );
  // console.log('pageX'    , e.pageX     );
  // console.log('screenX'  , e.screenX   );
  // console.log(' ----------------------------------- '   );

  // clientX | Y     -> 브라우저에 보이는 화면기준(스크롤바와관계없이 보이는 기준)
  // pageX | Y       -> 브라우저에 페이지에 존재하는 내용 시작부터 기준치를 잰 위치
  // offsetX | Y     -> 선택자 기준
  // screenX | Y     -> 모니터화면의 좌표

  // movementX | Y   -> 이전기준과, 차후의 기준의 값차이
});