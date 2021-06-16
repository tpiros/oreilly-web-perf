const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
// const compression = require('compression');
// const shrinkRay = require('shrink-ray-current');

// app.use(compression());
// app.use(shrinkRay());
app.use(express.static(__dirname));
const handler = (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
};
app.get('/', handler);
app.listen(port, () => console.info(`Server running on port ${port}`));
