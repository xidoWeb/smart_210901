// Card.js
import { MdFavorite } from 'react-icons/md';

export default function Card({data}){  
  // const data = props.data;
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
        <button type="button">좋아요 <MdFavorite /></button>
        <a className="link" href={data.detailLInk}>상세보기</a>
      </div>
    </li>
  )
}