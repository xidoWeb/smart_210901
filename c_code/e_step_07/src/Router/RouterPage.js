import React from 'react';
import Home from '../page/Home';
import About from '../page/About';
import PageError from '../page/PageError';
import { Routes, Route } from 'react-router-dom';

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/*"  element={<PageError />} />
    </Routes>
  )
}

export default RouterPage
