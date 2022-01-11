// Main.js (page)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewDetail from './main/ViewDetail';
import '../style/Main.scss';

export default function Main() {

  const [detail, setDetail] = useState([]);

  useEffect( ()=>{
    axios.get('./data/viewDetail.json')
    .then(res => setDetail(res.data) )    
  }, [])

  return (
    <div className='main_area'>
      <h2>Title</h2>
      <div className='view_part'>
        { 
          detail.map( (data) => <ViewDetail key={data.id} /> )  
        }
      </div>
    </div>
  )
}

// 외부 데이터를 불러오기 위해서는 useEffect를 사용
// 비동기로 처리되는 데이터를 컴포넌트에 적용하기 위해서는 useState를 이용하여 변환
