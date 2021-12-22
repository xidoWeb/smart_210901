// test_matchMedia.js

const device = [
  {"type": "mobile"  , "size":600  },
  {"type": "tablet"  , "size":1024 },
  {"type": "pc"      , "size":1440 },
  {"type": "full"                  },
];
// const deviceMedia = [
//   window.matchMedia(`all and (max-width: ${device[0].size -1}px)`),
//   window.matchMedia(`all and (min-width: ${device[0].size}px) and (max-width: ${device[1].size -1}px)`),
//   window.matchMedia(`all and (min-width: ${device[1].size}px) and (max-width: ${device[2].size -1}px)`),
//   window.matchMedia(`all and (min-width: ${device[2].size}px)`)
// ];


const deviceMedia = []
for(let i=0; i<device.length; i++){
  let match;
  if(i===0){
    match = window.matchMedia(`all and (max-width: ${device.at(i).size -1}px)`);
    deviceMedia.push(match);
  }else if(i === device.length-1){
    match = window.matchMedia(`all and (min-width: ${device.at(-2).size}px)`);
    deviceMedia.push(match);
  }else{
    match = window.matchMedia(`all and (min-width: ${device.at(i-1).size}px) and (max-width: ${device.at(i).size -1}px)`);
    deviceMedia.push(match);
  }
}
// console.log( deviceMedia );


let nowDeviceType;
const fnMatchcheck = (type,index)=>{
  let el;
  if( type.matches === true ){
    nowDeviceType = device[index].type;
    console.log( nowDeviceType );
    console.log( type.__proto__ );

    el = document.querySelector('.'+nowDeviceType);
    el.classList.add('on');

  }else{
    el = document.querySelector('.'+device[index].type);
    el.classList.remove('on');
  } 
};

deviceMedia.forEach( fnMatchcheck );


deviceMedia.forEach( (type,index)=>{
  type.addEventListener('change', e =>{
    fnMatchcheck(type,index);
  });
});


