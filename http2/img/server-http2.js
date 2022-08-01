const http2 = require('http2');
const { readFileSync } = require('fs');
const path = require('path');

const options = {
  key: readFileSync('./certs/key.pem'),
  cert: readFileSync('./certs/cert.pem'),
  allowHTTP1: true,
};

const handler = (request, response) => {
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

  const content = readFileSync(filePath);
  response.writeHead(200, { 'Content-Type': contentType });
  response.end(content, 'utf-8');
};
http2.createSecureServer(options, handler).listen(8081);
console.log('Server running at https://localhost:8081/');
