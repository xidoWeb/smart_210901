import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Footer.scss';

export default function Footer(props){

  const fnAction = ({isActive})=> isActive ? "on" : '' ;

  return (
    <footer id="footBox">
      <h2>{props.heading}<br />정보</h2>
      <div className="company_info">
        <ul>
          <li><NavLink className={fnAction} to="/manual">이용약관</NavLink></li>
          <li><NavLink className={fnAction} to="/person">개인정보처리</NavLink></li>
          <li><NavLink className={fnAction} to="/rule">회사방침</NavLink></li>
          <li><NavLink className={fnAction} to="/etc">기타</NavLink></li>
        </ul>
      </div>
    </footer>
  )
}