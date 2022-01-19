// AboutDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function AboutDetail() {
  const {linkTo} = useParams();
  return (
  <div>
    <h3>{linkTo} 상세페이지</h3>
    <p>상세페이지 내용 설명</p>
  </div>
  );
}

export default AboutDetail;
