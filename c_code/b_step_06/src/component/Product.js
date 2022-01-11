// Product.js

import React, { useState } from 'react';
import ProductContent from './ProductContent';
import '../style/Product.scss';

export default function Product() {
  // const num = 0, const setNum = (i)=>{ num = i }
  const [num, setNum] = useState(0);
  // ------------------------------------------
  const menuData = [
    {
      "pageTitle" : "cofee",
      "pageContent" : "coffee 내용에 따른 설명",
      "products": [
        { "product":"espresso"   , "narr": "espresso 설명" },
        { "product":"americano"  , "narr": "아메리카노 설명" },
        { "product":"latte"      , "narr": "latte 설명" },
        { "product":"cafe mocca" , "narr": "cafe mocca 설명" },
        { "product":"apogato"    , "narr": "apogato 설명" }
      ]
    },
    {
      "pageTitle" : "drink",
      "pageContent" : "drink 내용에 따른 설명",
      "products": [
        { "product":"orange" , "narr": "orange 설명" },
        { "product":"포도"   , "narr": "포도 설명" },
        { "product":"kiwi"   , "narr": "kiwi 설명" },
        { "product":"banana" , "narr": "banana 설명" }
      ]                      
    }
  ]

  let prCon = menuData[num];
  const fnTab = (e, i)=>{
    e.preventDefault();
    setNum(i);
    prCon = menuData[num];
  }

  // ------------------------------------------
  return (
    <div className='product_area'>
      <div className="btn_part">
        <button type="button" onClick={(e)=> fnTab(e, 0) }>Coffee</button>
        <button type="button" onClick={(e)=> fnTab(e, 1) }>Drink</button>
      </div>
      <ProductContent data={prCon} />      
    </div>
  )}



