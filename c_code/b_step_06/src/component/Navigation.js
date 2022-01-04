
export default function Navigation (){
  const navList = ['list1', 'list2', 'list3'];

  return (
    <nav id="navBox">
        <h2 className="blind">navigation</h2>
        <ul>
          { navList.map( (element, idx)=>{
            return <li key={idx}>{element}</li>
          }) }
        </ul>
      </nav>
  )
}