// Header.js
export default function Header({site, url}){
  // const props = {  site:'xido',  url : 'http://naver.com' }
  // const myName = 'xido-school';
  // const site = 'xido';
  // const url = "http://naver.com";

  const h1Style = { color:'#05f', textTransform: 'uppercase' };

  return (
      <header id="headBox">
        <h1 style={h1Style}>
          <a 
            href={url} 
            target="_blank">{site}</a>
          </h1>
      </header>
  )
}


// -------------------------------------
// function Header() {}
// export default Header;

// export default function Header(){}

// const Header = function(){}
// export default Header;