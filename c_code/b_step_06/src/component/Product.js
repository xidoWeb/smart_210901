// Product.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContent from './ProductContent';
import '../style/Product.scss';

export default function Product() {
  /*
  // const num = 0, const setNum = (i)=>{ num = i }
  const [num, setNum] = useState(0);
  // ------------------------------------------
  // const [menuData, setMenuData] = useState([]);

  useEffect(()=>{
    axios.get('./data/menuData.json')
    .then(res=>  setMenuData(res.data) )
  }, [])

  console.log( menuData );

  // let prCon = menuData[num];
  const fnTab = (e, i)=>{
    e.preventDefault();
    setNum(i);
    //  const prCon = menuData[num];
  }
  */
  const [num, setNum] = useState(0);
  const [menuData, setMenuData] = useState([]);
  useEffect(()=>{
    axios.get('./data/menuData.json')
    .then(res=>  setMenuData(res.data) )
  }, [])

  const code = menuData.filter( (data, index) => index === num );
  
  // ------------------------------------------
  return (
    <div className='product_area'>
      <div className="btn_part">
        {/* <button type="button" onClick={(e)=> fnTab(e, 0) }>Coffee</button>
        <button type="button" onClick={(e)=> fnTab(e, 1) }>Drink</button> */}
      </div>
      {/* {menuData.map( data => <p key={data.pageTitle}>{data.pageTitle}</p> )} */}      
      {code.map( (data,idx) => <ProductContent key={idx} data={data} /> )}
      
      {/* <ProductContent data={code} /> */}
    </div>
  )}



