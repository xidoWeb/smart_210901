// Event.js

import React,  { useEffect, useState }  from 'react';
import { MdExpandMore } from 'react-icons/md';

import axios from 'axios';
import '../style/Event.scss';
import EventLi from './EventLi';

export default function Event() {
  const plusN = 5;
  const dataUrl = './data/eventList.json';
  
  const [dataList, setDataList] = useState([]);
  const [num, setNum] = useState(5);

  // data 불러오기
  useEffect(()=>{
    // axios.get(dataUrl).then(res => setDataList(res.data) )
    (async ()=>{
      const res = await axios.get(dataUrl);
                  setDataList(res.data);
    })()
  }, [])
  // useEffect(()=>{   console.log( num ); }, [num])
  const fnPlusNum = () => {  setNum( num + plusN );   }
  const viewData = dataList.filter((data,i)=> i < num );
  return (
    <article className='event_area'>
      <h2>Event</h2>
      <ul>
        { viewData.map( (view,idx)=> <EventLi  key={idx} data={view} />  )}        
      </ul>

      <div className='more_btn'>
        <button type="button" onClick={fnPlusNum}>
          <MdExpandMore />
          <span className='blind'>더보기</span>
        </button>
      </div>
    </article>
  )
}
