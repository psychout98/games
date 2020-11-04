const express = require('express');
const path = require('path');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

const app = express();

//app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5000, () => {
  console.log('Game app is listening on 5000');
})