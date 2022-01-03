// Header.js

export default function Header(){
  const myName = 'xido-school';
  const h1Style = { 
    color:'#05f', 
    textTransform: 'uppercase'
  };

  return (
      <header id="headBox">
        <h1 style={h1Style}>{myName}</h1>
      </header>
  )
}


// -------------------------------------
// function Header() {}
// export default Header;

// export default function Header(){}

// const Header = function(){}
// export default Header;