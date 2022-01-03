// Header.js
import Gnb from "./Gnb";

export default function Header({site, url}){  
  const h1Style = { color:'#05f', textTransform: 'uppercase' };
  return (
      <header id="headBox">
        <h1 style={h1Style}>
          <a href={url}>{site}</a>
        </h1>
        <Gnb />
      </header>
  )  
}

Header.defaultProps = { site : 'xido' };

// -------------------------------------
// function Header() {}
// export default Header;

// export default function Header(){}

// const Header = function(){}
// export default Header;


