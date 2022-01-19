import React, {useState} from 'react'

function HomeCon() {

  const conStyle = { 
    width:'80%', height:'400px', margin:'1rem auto', 
    padding:'0.5rem', color:'#fff',
    backgroundColor:'#aaa'
  }

  const [myStyle, setMyStyle] = useState({...conStyle});
  const [pname , setPname] = useState('ticket');

  const fnStyle = (e) => {
    e.preventDefault();
    setMyStyle( (myStyle.color === conStyle.color) ? {...conStyle, backgroundColor:'#fa0', color:'#555'} : {...conStyle } );
    setPname( (pname === 'ticket') ? pname + ' on' : 'ticket' );
  }

  return (
    <article id="conBox">
      <h3>본문영역</h3>
      <button type="button" onClick={fnStyle}>버튼 클릭</button>
      <div className='con_area' style={myStyle}>
        <p className={pname}>Tikcucog</p>
      </div>
    </article>
  )
}

export default HomeCon
