// CardList.js
import { MdFavorite } from 'react-icons/md';
import '../style/CardList.scss';

export default function CardList(){
  // ---------------------------------------------
  
  // ---------------------------------------------
  return (
    <div className="card_area">
      <h3>card list</h3>
      <ul className="card_wrap">
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
        <li>
          <div className="img_set"></div>
        </li>
        <li>
          <div className="img_set"></div>
        </li>
        <li>
          <div className="img_set"></div>
        </li>
        <li>
          <div className="img_set"></div>
        </li>
        <li>
          <div className="img_set"></div>
        </li>
      </ul>
    </div>
  )
  // ---------------------------------------------
} // CardList