const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));
app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});
