import { MdFavorite } from 'react-icons/md';
import { useState } from 'react';
import '../style/ConBox.scss';


export default function ConBox(){

  const favArr = ['Normal', 'Good'];
  const colorArr = [
    {color:'#ddd', fontSize:'1.5rem'},
    {color:'#f33', fontSize:'1.5rem'},
  ];
  const [fav, setFav] = useState(0);
  const fnFavorite = ()=>{ setFav( !fav ? 1 : 0  ) };
  const [number, setNumber] = useState(0);
  const fnIncr = ()=>{ setNumber(number + 1) };
  const fnDecr = ()=>{ setNumber(number <= 0 ? 0 : number -1 ) };

  
  return (
    <article id="conBox">
      <h2>article</h2>
      <div className='card'>
        <div className='img'>이미지 삽입</div>
        <dl>
          <dt>title</dt>
          <dd>아무내용을 작성</dd>
        </dl>
        <div className='btn'>
          <button type="button" onClick={fnFavorite}>좋아요</button>
          <span style={colorArr[fav]}>{favArr[fav]} <MdFavorite /></span>
        </div>
        <div className='btn'>
          <button type="button" onClick={fnIncr}>+1</button>
          <button type="button" onClick={fnDecr}>-1</button>
          <span>{number}</span>
        </div>
      </div>
    </article>
  )
}
