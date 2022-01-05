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
  const dataUrl = './data/cardListData.json';

  useEffect( ()=>{
    axios.get(dataUrl)
    .then(res => setCardData(res.data))
    .catch( console.log )  
  }, [])

  // 단순히 순서대로진행하는경우는 async/await이용
  // 결과에대한 에러를 확인할 필요가 있을경우 then/catch 절을 이용

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