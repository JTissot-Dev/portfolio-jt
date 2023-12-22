const express = require('express');
const app = express();
const port = 3000;

var mail = require('./controlers/mailWs.js');
app.use(express.json());
app.use('/', mail);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});