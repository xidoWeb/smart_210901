import React, { Fragment } from 'react';
import HomeView from './Home/HomeView';
import HomeCon from './Home/HomeCon';
import HomeNews from './Home/HomeNews';

function Home() {
  return (
    <Fragment>    
      <div className='page_wrap'>
        <h2>Home</h2>
        <HomeView />
        <HomeCon />
        <HomeNews />      
      </div>
    </Fragment>
  )
}

export default Home
