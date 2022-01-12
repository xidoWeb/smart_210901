// EventLi.js
import React from 'react';
import {Link} from 'react-router-dom';

export default function EventLi({data}) {
  return (
    <li>
      <div className='num'>{data.id}</div>
      <div className='img_detail' style={ {backgroundImage:`url(${data.image})`} }>
        <span className='blind'>{data.title}</span>
      </div>
      <dl>
        <dt>{data.title}</dt>
        <dd>날짜 : {data.date}</dd>
        <dd>{data.content}</dd>
        <dd className='link_btn'><Link to="#">자세히보기</Link></dd>
      </dl>
    </li>
  )
}
