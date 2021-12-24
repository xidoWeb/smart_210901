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

  fnDeviceNav(data.laptop);

}