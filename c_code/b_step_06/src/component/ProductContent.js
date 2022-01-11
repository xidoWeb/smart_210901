// ProductContent.js

import React,{useState, useEffect} from 'react';
import ProductLi from './ProductLi'

export default function ProductContent({data}) {
  // const prCon = data;
  const [list, setList] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(()=>{
    setList(data);
    setMenu(data.products);
  }, [])
  console.log( menu )

  return (
    <div className="content_part">      
      <h2>{list.pageTitle}</h2>
      <p>{list.pageContent}</p>
      <ul>
        {/* { list.products.map( (pr, idx) => <li key={idx}><dl><dt>{pr.product}</dt><dd>{pr.narr}</dd></dl></li> ) } */}
        { menu.map( (pr, idx) => <ProductLi key={idx} data={pr} /> ) }
      </ul>
    </div>
  )
}
