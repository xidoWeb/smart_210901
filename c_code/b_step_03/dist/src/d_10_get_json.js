// d_10_get_json.js
const dataUrl = 'https://script.google.com/macros/s/AKfycbwWpT593CvcR6j1ZBbF78hr-uena0IxtDk_CM1tHwRLEfXu5RfwfmLEsc799BHJXFxj1w/exec';

fetch(dataUrl)
  .then(response => {
    return response.json();
  })
  .then(data=>{
    console.log( data );
  });


