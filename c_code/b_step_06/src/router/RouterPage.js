import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../page/Main';
// import Company from '../page/Company';
import Product from '../component/Product';
import {Manual, Person, Rule, Etc} from '../page/Company';
import NotFound from '../component/NotFound';

export default function RouterPage() {
  return (
    <Routes>
      {/* <Route /> 화면에 노출될 페이지들의 목록 */}
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/person" element={<Person />} />
      <Route path="/rule" element={<Rule />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}


// 'react-router-dom' -> {BroserRouter, Routes, Route}