import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props){
  return (
    <footer id="footBox">
      <h2>{props.heading} 정보</h2>
      <div className="company_info">
        <ul>
          <li><Link to="/manual">이용약관</Link></li>
          <li><Link to="/person">개인정보처리</Link></li>
          <li><Link to="/rule">회사방침</Link></li>
          <li><Link to="/etc">기타</Link></li>
        </ul>
      </div>
    </footer>
  )
}