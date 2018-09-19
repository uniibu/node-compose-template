const http = require('http');
//loads http module
http.createServer((req, res) => {
  //creates server
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //sets the right header and status code
  res.end('Hello World\n');
  //outputs string with line end symbol
}).listen(8080);
//sets port and IP address of the server
console.log('Server is listening at port 8080');