// CardList.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../style/CardList.scss';

// id
// 이미지+이미지설명
// 제목
// 내용
// 상세페이지주소

export default function CardList(){
  // ---------------------------------------------
  // const cardListData = ;
  const [cardData, setCardData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async ()=>{
    const res = await axios.get('./data/cardListData.json')
                setCardData(res.data)  
  }, [])

  // ---------------------------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className="card_wrap">
        { 
        cardData.map(
          (card) => 
            <Card data={card} 
                  key={card.id} /> 
          )
        }
      </ul>
    </div>
  )
  // ---------------------------------------------
} // CardList


/*
<li>
  <div className="img_set"></div>
  <dl>
    <dt>title</dt>
    <dd>content</dd>
  </dl>
  <div className="btns">
    <button type="button">좋아요 <MdFavorite /></button>
    <a className="link" href="#">상세보기</a>
  </div>
</li>
*/ 