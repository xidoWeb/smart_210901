// Main.js (page)

import React, { useState, useEffect } from 'react';

import '../style/Main.scss';
import '../style/MainViewBox.scss';

export default function Main() {
  
  const listData = ['content_01', 'content_02', 'content_03', 'content_04'];
  listData.unshift(listData[listData.length-1]);

  const [num, setNum] = useState(0);
  const [check, setCheck] = useState('next');

  const initialStyle = {
    position:'relative', left:'-100%',
    transition: (num !== 0) ? 'margin 500ms ease' : 'none',
    animation : (num === 0) ? 'firstSlide 500ms ease 1' : 'none',
    marginLeft: `${num * -100}%`
  }  
  const setStyle = { ...initialStyle }

  useEffect( ()=>{
    console.log( listData[num] );
  }, [num])

  const fnClassAdd = (i)=>{
    const ON = (i === num) ? '  on' : '';
    const VIEW = 'view_';
    const textNum = '000' + (i+1);
    const VIEW_TEXT = VIEW + textNum.slice(-2);
    return VIEW_TEXT+ ON;
  };

  // const viewData = listData.filter( (list,idx) => idx === num );
  const fnNextSlide = ()=> { setNum( num >= 3 ? 0 : num + 1 ); setCheck('next');}
  const fnPrevSlide = ()=> { setNum( num <= 0 ? 3 : num - 1 ); setCheck('prev');}

  return (
    <div className='main_area'>
      <h2>Title</h2>
      <div className='view_part'>
        <div className='slide_btn'>
          <button type='button' className='next' onClick={ fnNextSlide }>다음</button>
          <button type='button' className='prev' onClick={ fnPrevSlide }>이전</button>
        </div>
        <div className='view_contents'>
          <ul style={setStyle}>
            {listData.map( (list, idx)=> <li key={idx}>{list}</li> )}
          </ul>
        </div>
      </div>
    </div>
  )
}

// 외부 데이터를 불러오기 위해서는 useEffect를 사용
// 비동기로 처리되는 데이터를 컴포넌트에 적용하기 위해서는 useState를 이용하여 변환
/* className={ fnClassAdd(idx) } */



// const list = [1,2,3,4,5,'a','b'];
// const list2 = [...list];
// console.log( list2 );

// const obj = { a: 1, b:2, c:3};
// const obj2 = {...obj, c:4, b:1, e:8};
// console.log( obj2 );