import Header from './component/Header';
import ContentBox from './component/ContentBox';
import Footer from './component/Footer';
import './App.css';

function App() {
  const myName = 'xido-web';
  // -------------------------------------
  return (
    <div className="App">
      <Header 
        url="http://naver.com" />
      <ContentBox 
        name={myName} />  
      <Footer name={myName} />      
    </div>
  );
}

export default App;
