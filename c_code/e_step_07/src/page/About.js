import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../style/About.scss';


function About() {
  const mockData = './data/MOCK_DATA.json';
  const [cardList, setCardList] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const rel = await axios.get(mockData);
      setCardList(rel.data);
    })()
  }); 

  const filterData = cardList.filter( (card,idx) => idx < 20 );

  return (
    <div className='page_wrap'>
      <h2>About page</h2>
      <ul className='card_wrap'>
        {filterData.map( (card, idx) => 
          <li key={idx}>{card.first_name}</li> 
        )}
      </ul>

    </div>
  )
}

export default About
