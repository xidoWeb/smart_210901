// rwd_import_nav.js

{  
  const path = '../temp/';
  const data = {
    mob : path + 'mobile_rwd_nav.html',
    laptop : path + 'laptop_rwd_nav.html'
  }
  const elNav = document.querySelector('#navBox');

  const fnDeviceNav = (type)=>{     
    fetch(type)
    .then(response => response.text())
    .then(element=>{
      elNav.innerHTML = element;
    })
  };

  // fnDeviceNav(data.laptop);
  // ======================================================
  // 브라우저 1024규격을 기준으로 html문서 data.mob / data.laptop의 코드로 확인하여 처리하도록 
  const deviceSize = `screen and (min-width:1024px)`;
  const mediaQuery = window.matchMedia(deviceSize);
  const fnDevice = ()=>{
    (mediaQuery.matches) ? fnDeviceNav(data.laptop) : fnDeviceNav(data.mob);
  }
  fnDevice();
  mediaQuery.addEventListener('change', fnDevice);
}