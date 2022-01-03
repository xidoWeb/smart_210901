// Header.js
export default function Header({site, url}){
  // const props = {  site:'xido',  url : 'http://naver.com' }
  // const myName = 'xido-school';
  // const site = 'xido';
  // const url = "http://naver.com";

  const h1Style = { color:'#05f', textTransform: 'uppercase' };
  const navLists = ['about','product','gallery','notice'];

  return (
      <header id="headBox">
        <h1 style={h1Style}>
          <a href={url} target="_blank">{site}</a>
          </h1>
          <nav className="gnb">
            <h2>navigation</h2>
            <ul>
              {/* <li><a href="/about">about</a></li>
              <li><a href="/product">product</a></li>
              <li><a href="/gallery">gallery</a></li>
              <li><a href="/notice">notice</a></li> */}
              { navLists.map( (li, idx) => <li key={idx}>{li}</li> ) }
            </ul>
          </nav>
      </header>
  )
}


// -------------------------------------
// function Header() {}
// export default Header;

// export default function Header(){}

// const Header = function(){}
// export default Header;