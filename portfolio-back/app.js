const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

var mail = require('./controlers/mailWs.js');
app.use(cors());
app.use(express.json());
app.use('/', mail);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});