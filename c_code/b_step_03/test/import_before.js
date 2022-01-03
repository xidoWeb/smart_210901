ib// import_before.js
const data = ['banana', 'melon'];

const codeFile = () => {
  return (`
    <div>
      <h1>hello</h1>
      <ul>
        <li>${data[0]}</li>
        <li>${data[1]}</li>
      </ul>  
    </div>
  `);
};

export default codeFile;


// #wrap
  // #headBox

  // changeArea - router(페이지변환역할)
    // #viewBox
    // #contentBox

  // #footBox


  // react 핵심 - SPA(Single Page Application)
  // virtual DOM 
  // JSX - javascript XML - <Component></Component> <Div />  <br /> <input />