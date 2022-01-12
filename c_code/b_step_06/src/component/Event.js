// Event.js

import React,  { useEffect, useState }  from 'react';
import { MdExpandMore } from 'react-icons/md';

import axios from 'axios';
import '../style/Event.scss';
import EventLi from './EventLi';

export default function Event() {

  const [dataList, setDataList] = useState([]);

  // data 불러오기
  const dataUrl = './data/eventList.json';

  useEffect(()=>{
    axios.get(dataUrl).then(res => setDataList(res.data) )
  }, [])

  const viewData = dataList.filter((data,i)=> i < 10 );

  return (
    <article className='event_area'>
      <h2>Event</h2>
      <ul>
        { viewData.map( (data,idx)=> <EventLi  key={idx} data={data} />  )}        
      </ul>

      <div className='more_btn'>
        <button type="button">
          <MdExpandMore />
          <span className='blind'>더보기</span>
          </button>
      </div>
    </article>
  )
}
