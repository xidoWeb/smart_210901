import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';

function App() {
  const title = 'site';

  return (
    <div className="App">
      <Header heading={title} />
      <Main />    
      <Footer heading={title} />
    </div>
  );
}

export default App;
