const http = require('http');  // var http = require('http'); // 웹서버를 구동하게만드는 기능 요청

const hostname = '127.0.0.1';
const port = 6543;

const server = http.createServer((req, res) => {   // http = { createServer : function(){} }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Good!!!');
});

server.listen(port, hostname, () => {  // (a)=>{}  ===  function(a){}
  console.log(`Server running at http://${hostname}:${port}/`);
});