// CardList.js
import { MdFavorite } from 'react-icons/md';
import '../style/CardList.scss';

// id
// 이미지+이미지설명
// 제목
// 내용
// 상세페이지주소
const cardListData = [
  { "id":"01" , 
    "imgUrl":"#7425E9", "imgAlt":"Esijomje", 
    "title":"Harvey Ramsey","content":"12cc7dec-9b46-51f4-a6c7-c0c673a2e8bf", "detailLInk":"#"},
  { "id":"02" , 
    "imgUrl":"#48D0F2", "imgAlt":"Dirusob", 
    "title":"Christina Douglas","content":"43c3824a-76b3-550b-b5a9-ca177b1ecc13", "detailLInk":"#"},
  { "id":"03" , 
    "imgUrl":"#D08855", "imgAlt":"Kuizohod", 
    "title":"Minerva Sanders","content":"f9688777-c2a1-5112-bb01-618e3d494abd", "detailLInk":"#"},
  { "id":"04" , 
    "imgUrl":"#611EAB", "imgAlt":"Tahpajbi", 
    "title":"Jeanette Pittman","content":"c1ef1e37-c805-529e-9896-8ace0a0d6aa3", "detailLInk":"#"},
  { "id":"05" , 
    "imgUrl":"#796077", "imgAlt":"Cirhudulu", 
    "title":"Pauline Mathis","content":"a281ded2-e694-5e9c-ad8e-d5d3d24f8188", "detailLInk":"#"}
];



export default function CardList(){
  // ---------------------------------------------

  // ---------------------------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className="card_wrap">

        { cardListData.map((card) => {
            console.log(card)
            return (
            <li key={card.id}>
              <div  className="img_set" 
                    style={ {backgroundColor:card.imgUrl} }> {card.imgAlt}
              </div>
              <dl>
                <dt>{card.title}</dt>
                <dd>{card.content}</dd>
              </dl>
              <div className="btns">
                <button type="button">좋아요 <MdFavorite /></button>
                <a className="link" href={card.detailLInk}>상세보기</a>
              </div>
            </li>
            )
        })}

        {/* <li>
          <div className="img_set"></div>
          <dl>
            <dt>title</dt>
            <dd>content</dd>
          </dl>
          <div className="btns">
            <button type="button">좋아요 <MdFavorite /></button>
            <a className="link" href="#">상세보기</a>
          </div>
        </li>         */}
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