import {NavLink} from 'react-router-dom';

export default function Navigation (){
  // const navList = ['list1', 'list2', 'list3'];
  const navList = [
    {content:"Main", href:"main"},
    {content:"Review", href:"review"},
    {content:"CardList", href:"cardList"}
  ];

  return (
    <nav id="navBox">
        <h2 className="blind">navigation</h2>
        <ul>
          { navList.map( (nav, idx)=>{
            return (
              <li key={idx}>
                <NavLink 
                    className={ ({isActive}) => 'box ' +(isActive ?  "on" : '') } 
                    to={nav.href}>{nav.content}</NavLink>
              </li>
              )
          }) }
        </ul>
      </nav>
  )
}