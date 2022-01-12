// Event.js

import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import {Link} from 'react-router-dom';
import '../style/Event.scss';

export default function Event() {
  return (
    <article className='event_area'>
      <h2>Event</h2>
      <ul>
        <li>
          <div className='num'>1</div>
          <div className='img_detail'>이미지</div>
          <dl>
            <dt>title</dt>
            <dd>content</dd>
            <dd className='link_btn'><Link to="#">자세히보기</Link></dd>
          </dl>
        </li>
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
