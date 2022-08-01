const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer(function (request, response) {
    let filePath = `dist${request.url}`;
    if (filePath === 'dist/') {
      filePath = 'dist/index.html';
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.jpg':
        contentType = 'image/jpeg';
        break;
    }

    const content = fs.readFileSync(filePath);
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(content, 'utf-8');
  })
  .listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
