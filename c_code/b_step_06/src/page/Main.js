// Main.js (page)

import React, { useState, useEffect, useRef } from 'react';

import '../style/Main.scss';
import '../style/MainViewBox.scss';

export default function Main() {
  
  const listData = ['content_01', 'content_02', 'content_03', 'content_04'];
  listData.unshift(listData[listData.length-1]);

  const [num, setNum] = useState(0);
  // const [check, setCheck] = useState('next');
  const checkRef = useRef('next'); // {current:'next'}
  
  const initialStyle = {
    position:'relative', left:'-100%',    
    marginLeft: `${num * -100}%`
  }  

  const [slideStyle, setSlideStyle] = useState(initialStyle);

  useEffect( ()=>{
    // console.log( listData[num] );
    // (check === 'next') ? fnSlideNext() : fnSlidePrev();
    (checkRef.current === 'next') ? fnSlideNext() : fnSlidePrev();
  }, [num])

  const fnClassAdd = (i)=>{
    const ON = (i === num) ? '  on' : '';
    const VIEW = 'view_';
    const textNum = '000' + (i+1);
    const VIEW_TEXT = VIEW + textNum.slice(-2);
    return VIEW_TEXT+ ON;
  };

  const fnSlideNext = () => {
    setSlideStyle({
      ...initialStyle,
      transition: (num !== 0) ? 'margin 500ms ease' : 'none',
      animation : (num === 0) ? 'firstSlide 500ms ease 1' : 'none',});
  };
  const fnSlidePrev = () => {
    setSlideStyle({
      ...initialStyle,
      transition: (num !== listData.length-2) ? 'margin 500ms ease':'none',
      animation : (num === listData.length-2 ) ? 'lastSlide 500ms ease 1':'none'
    });
  };

  // const viewData = listData.filter( (list,idx) => idx === num );
  const fnNextSlide = ()=> { 
    setNum( num >= listData.length-2 ? 0 : num + 1 ); // useState값 변경 -> Main()
    // setCheck('next'); // useState값 변경 -> Main()
    checkRef.current = 'next';
  }
  const fnPrevSlide = ()=> { 
    setNum( num <= 0 ? listData.length-2 : num - 1 ); 
    // setCheck('prev'); 
    checkRef.current = 'prev';
  }

  return (
    <div className='main_area'>
      <h2>Title</h2>
      <div className='view_part'>
        <div className='slide_btn'>
          <button type='button' className='next' onClick={ fnNextSlide }>다음</button>
          <button type='button' className='prev' onClick={ fnPrevSlide }>이전</button>
        </div>
        <div className='view_contents'>
          <ul style={slideStyle}>
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


// useState는 값이 바뀌면 해당하는 변수에따른 값이 재할당하기위해 리렌더링처리
// useRef는 값이 바뀌더라도 렌더링을 다시 하지 않는다. 단순히 값만 가지고 있는다.



// useState는 변화가 일어나면 useEffect에서 감지가 됨 , 
// useState를 사용하면 렌더링이 다시됨.
// useRef는 DOM의 변화는 일어나지 않음
// 함수를 다시 수행하지 않거나, 화면에 뿌려주는기능을 사용하지 않는다면
// useRef를 써도 된다.
