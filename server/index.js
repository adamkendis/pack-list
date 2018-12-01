const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})