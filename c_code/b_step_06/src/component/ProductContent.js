// ProductContent.js

import React from 'react';
import ProductLi from './ProductLi';

export default function ProductContent({data}) {
  const prCon = data;

  return (
    <div className="content_part">
        <h2>{prCon.pageTitle}</h2>
        <p>{prCon.pageContent}</p>
        <ul>
          { prCon.products.map( (pr, idx) => (
              <ProductLi key={idx} data={pr} />            
            ))}
        </ul>
    </div>
  )
}
