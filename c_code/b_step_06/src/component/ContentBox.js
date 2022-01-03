
export default function ContentBox(){

  const myName = 'xido-school';

  // -------------------------------
  return (    
    <article id="contentBox">
      <p style={ {color:'#f50'} }>{myName} 이란? ...</p>
      <dl>
        <dt>{myName} 커리큘럼</dt>
        <dd>{myName} 내용</dd>
      </dl>
    </article>  
  )
}