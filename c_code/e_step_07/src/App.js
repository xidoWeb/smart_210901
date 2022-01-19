import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterPage from './Router/RouterPage';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterPage />  
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

