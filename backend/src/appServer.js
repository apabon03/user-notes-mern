//tener codigo del servidor o framework


//defino el servidor
const express = require('express');
const cors = require('cors');
const app = express();



//settings: configuraciones del servidor
app.set('port', process.env.PORT || 4000);

//middlewares: funciones que se ejecutan antes de acceder a las rutas
app.use(cors());
app.use(express.json());

//routes

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;