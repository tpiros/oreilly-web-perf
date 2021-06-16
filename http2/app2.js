const express = require('express');
const http2Express = require('http2-express-bridge');
const http2 = require('http2');
const { readFileSync } = require('fs');
const autopush = require('http2-express-autopush');

const app = http2Express(express);
const options = {
  key: readFileSync('./certs/key.pem'),
  cert: readFileSync('./certs/cert.pem'),
  // allowHTTP1: true,
};

app.use(autopush(`${__dirname}/public`));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

const server = http2.createSecureServer(options, app);

server.listen(8081, () => {
  console.log(`listening on port 8081`);
});
