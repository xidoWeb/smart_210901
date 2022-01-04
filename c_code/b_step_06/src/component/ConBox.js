import '../style/ConBox.scss'

export default function ConBox(){
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
          <button type="button">좋아요</button>
          <span>🤍🧡</span>
        </div>
      </div>
    </article>
  )
}