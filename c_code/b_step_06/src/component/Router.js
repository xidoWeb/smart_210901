import {Routes, Route} from 'react-router-dom';
import Main from './Main';
import Review from './Review';
import CardList from './CardList';

export default function Router(){
  return(   
  <Routes>
    <Route path="/" element={ <Main />} />
    <Route path="/main" element={ <Main /> } />
    <Route path="/review" element={ <Review /> } />
    <Route path="/cardList" element={ <CardList /> } />
  </Routes>)
}