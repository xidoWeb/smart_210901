// test_matchMedia.js


//   const device = [
//     {"type": "mobile"  , "size":600  },
//     {"type": "tablet"  , "size":1024 },
//     {"type": "pc"      , "size":1440 },
//     {"type": "full"                  },
//   ];
//   let deviceType;
//   const deviceList = [];
  
//   let mob = (deviceType) => {
//     const matchType = window.matchMedia(`screen and (max-device-width: ${deviceType}px)`);
//     deviceList.push(matchType);
//     // return window.matchMedia(`screen and (max-device-width: ${deviceType}px)`);
//   }
//   for(check of device){
//     mob(check.size)
//   }
//   console.log( deviceList )
//   deviceList.forEach((device, index)=>{
//     device.addEventListener('change', e=>{
//       console.log(e.currentTarget)
//       // if(e.currentTarget.matches === false){
//       //   console.log(  e.currentTarget.media );
//       // }
//       // if(e.currentTarget.matches === true){
//       //   console.log(  e.currentTarget.media );
//       // }
//     })
//   })

// // mediaQueryList.addEventListener('change', (e)=>{
// //   fnDeviceCheck();
// // })

const device = [
  {"type": "mobile"  , "size":600  },
  {"type": "tablet"  , "size":1024 },
  {"type": "pc"      , "size":1440 },
  {"type": "full"                  },
];
const deviceMedia = [
  window.matchMedia(`(max-device-width: ${device[0].size -1}px)`),
  window.matchMedia(`(min-device-width: ${device[0].size}px) and (max-device-width: ${device[1].size -1}px)`),
  window.matchMedia(`(min-device-width: ${device[1].size}px) and (max-device-width: ${device[2].size -1}px)`),
  window.matchMedia(`(min-device-width: ${device[2].size}px)`)
];
let nowDeviceType;

deviceMedia.forEach( (type,index)=>{
    let el;
    if( type.matches === true ){
      nowDeviceType = device[index].type;
      el = document.querySelector('.'+nowDeviceType);
      el.classList.add('on');
    }
})


deviceMedia.forEach( (type,index)=>{
  type.addEventListener('change', e =>{
    let el;
    if( type.matches === true ){
      nowDeviceType = device[index].type;
      // console.log( nowDeviceType );
      el = document.querySelector('.'+nowDeviceType);
      el.classList.add('on');
    }else{
      el = document.querySelector('.'+device[index].type);
      el.classList.remove('on');
    } 
  });
})
