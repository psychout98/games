import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { renderToString } from 'react-dom/server';
//import counterApp from './reducers';
//import App from './containers/App';
import Store from '../public/client/store.js';
const express = require('express');
const path = require('path');
const partials = require('express-partials');
const bodyParser = require('body-parser');
const Promise = require('bluebird');


const app = express();

var handleRender = (req, res) => {
  var store = Store();
  const html = renderToString(<Provider store={store}>
    <App />
  </Provider>);
  res.send(renderFullPage(html, store.getState()));
};

var renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Games</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="dist/app.bundle.js"></script>
      </body>
    </html>
    `;
};

//app.use(partials());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(handleRender);

//app.get('/', (req, res) => {
  //res.render();
//});

app.listen(5000, () => {
  console.log('Game app is listening on 5000');
})