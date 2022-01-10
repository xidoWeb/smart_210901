import React from 'react';
import '../style/Company.scss';
import ManualStyle from '../style/Manual.module.scss';
import PersonStyle from '../style/Person.module.scss';


export function Manual() {
  return ( 
    <div className="company_area">
      <h2 className={ManualStyle.title}>Manual</h2>
      <p>Manual 관련 무언가 내용작성</p>
    </div>
  )
};
export function Person() {
  return ( 
    <div className="company_area">
      <h2 className={PersonStyle.title}>Person <span>page</span></h2>
      <p>Person 관련 무언가 내용작성</p>
    </div>
  )
};
export function Rule() {
  return ( 
    <div className="company_area">
      <h2 className='title'>Rule</h2>
      <p>Rule 관련 무언가 내용작성</p>
    </div>
  )
};
export function Etc() {
  return ( 
    <div className="company_area">
      <h2 className='title'>Etc</h2>
      <p>Etc 관련 무언가 내용작성</p>
    </div>
  )
};
