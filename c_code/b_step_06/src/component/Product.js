// Product.js

import React from 'react';
import '../style/Product.scss';

export default function Product() {
  return (
    <div className='product_area'>
      <h2>product 상품 페이지</h2>
      <p>Qui ex irure adipisicing labore est dolor id laborum aliquip labore velit.</p>

      <ul>
        <li>
          <dl>
            <dt>메뉴 제목</dt>
            <dd>메뉴 관련 내용</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>메뉴 제목</dt>
            <dd>메뉴 관련 내용</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>메뉴 제목</dt>
            <dd>메뉴 관련 내용</dd>
          </dl>
        </li>
      </ul>

    </div>
  )
}



