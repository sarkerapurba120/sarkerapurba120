// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(4000, () => {
  console.log('সার্ভার চালু হয়েছে: http://localhost:4000');
    console.log('Server is running at http://localhost:4000');
    console.log('সার্ভার চালু হয়েছে: http://localhost:4000');
    console.log('Server is running at http://localhost:4000');
    console.log('সার্ভার চালু হয়েছে: http://localhost:4000');
    console.log('Server is running at http://localhost:4000');
    console.log('সার্ভার চালু হয়েছে: http://localhost:4000');
    console.log('Server is running at http://localhost:4000');
    
});