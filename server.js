const path = require('path');
const express = require('express');

const pathToBuild = path.join(__dirname + '/bundle');
const pathToIndex = path.join(__dirname + '/index.html');

const app = express();

app.use(express.static(pathToBuild));

app.get('/', (req, res) => {
  res.sendFile(pathToIndex);
});

app.listen(process.env.PORT || 3000);
