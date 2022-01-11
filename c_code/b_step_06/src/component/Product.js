// Product.js

import React from 'react';
import '../style/Product.scss';

export default function Product() {
  // ------------------------------------------
  const prCon = {
    "pageTitle" : "cofee",
    "pageContent" : "coffee 내용에 따른 설명",
    "products": [
      { "product":"espresso"   , "narr": "espresso 설명" },
      { "product":"americano"  , "narr": "아메리카노 설명" },
      { "product":"latte"      , "narr": "latte 설명" },
      { "product":"cafe mocca" , "narr": "cafe mocca 설명" },
      { "product":"apogato"    , "narr": "apogato 설명" }
    ]
  };

  // ------------------------------------------
  return (
    <div className='product_area'>
      <h2>{prCon.pageTitle}</h2>
      <p>{prCon.pageContent}</p>
      <ul>
        { prCon.products.map( (pr, idx) => (
          <li key={idx}><dl><dt>{pr.product}</dt><dd>{pr.narr}</dd></dl></li>
          ) )}
      </ul>
    </div>
  )}



