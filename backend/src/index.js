<<<<<<< HEAD
//aqui importamos nuestros modulos

require('dotenv').config();

const app = require("./app");
require('./database');

//inicializamos desde este modulo, el servidor

async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port: ', app.get('port'));
}

main();
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

>>>>>>> c5daf82f039ca9a324737ff261082dd0309bfc9e
