const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('../knexfile.js')['development'];
const knex = require('knex')(config);
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/items', (req, res) => {
  knex('items')
    .then( items => {
      console.log(items);
      res.send(items);
    });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})