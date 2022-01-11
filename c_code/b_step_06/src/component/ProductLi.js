// ProductLi.js

import React from 'react';

export default function ProductLi({data}) {
  const pr = data;
  return (
    <li>
      <div className='img_detail'></div>
      <dl>
        <dt>{pr.product}</dt>
        <dd>{pr.narr}</dd>
      </dl>
    </li>
  )
}
