// ProductLi.js

import React from 'react';

export default function ProductLi({data}) {
  console.log( data );
  return (  
    <li>
      <div className='img_detail'></div>
        <dl>
          <dt>{data.product}</dt>
          <dd>{data.narr}</dd>
      </dl>
    </li>
  )
  
  
}
