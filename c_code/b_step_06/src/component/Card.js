// Card.js
import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';

export default function Card({data}){  
  
  const btnStyleArr = [
    {color:'#333', fontWeight:700, backgroundColor:'#ada'},
    {color:'#155', fontWeight:700, backgroundColor:'#fff', border:'1px solid #777'}
  ];
  const styleArr = [ {color:'#333'}, {color:'#f00'} ];


  const [ckN, setCkN] = useState(0);
  const fnCheck = ()=>{
    setCkN( ()=> ckN === 0 ? 1 : 0 )
    // console.log( checked )
  };
  
  const fnChange = (e)=>{
    console.log( e.target );
  }
  return (
    <li>
      <div  className="img_set" 
            style={ {backgroundColor:data.imgUrl} }> 
            {data.imgAlt}
      </div>
      <dl>
        <dt>{data.title}</dt>
        <dd>{data.content}</dd>
      </dl>
      <div className="btns">
        <span>
          <input  type="checkbox"
                  id={data.checkName} 
                  name={data.checkName} 
                  onChange={ fnChange }   
                  checked={ckN}           
                  value="좋아요체크" />
        </span>  
        
        <button type="button" onClick={fnCheck} style={btnStyleArr[ckN]}>좋아요 <MdFavorite style={styleArr[ckN]} /></button>
        <a className="link" href={data.detailLInk}>상세보기</a>
      </div>
    </li>
  )
}