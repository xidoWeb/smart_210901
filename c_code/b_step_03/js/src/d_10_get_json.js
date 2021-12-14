"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_10_get_json.js
var dataUrl = 'https://script.google.com/macros/s/AKfycbwWpT593CvcR6j1ZBbF78hr-uena0IxtDk_CM1tHwRLEfXu5RfwfmLEsc799BHJXFxj1w/exec';
fetch(dataUrl).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data);
});