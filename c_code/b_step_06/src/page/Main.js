// Main.js (page)

import React from 'react';
import ViewDetail from './main/ViewDetail';
import '../style/Main.scss';

export default function Main() {
  return (
    <div className='main_area'>
      <h2>Title</h2>
      <div className='view_part'>
        <ViewDetail />
        <ViewDetail />
        <ViewDetail />
        <ViewDetail />
        <ViewDetail />

      </div>
    </div>
  )
}
