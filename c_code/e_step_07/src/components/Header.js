import logo from '../img/gerbera.png'; // import는 src기준
import React , {useEffect, useState} from 'react';
// import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  /* 함수(컴포넌트) 내부에서 경로를 처리하는 형태는 public기준 */
  const imgStyle = {width:'50px', height:'auto'};

  return (
    <header id="headBox" style={{ display:'flex', justifyContent:'space-around'}}>
      <h1><Link to="/"><img src={logo} alt="사이트이름" style={imgStyle} /></Link></h1>
      <nav className='gnb' >
        <ul className='gnb'>
          <li><NavLink to="/">home</NavLink> </li>
          <li><NavLink to="about">about</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
