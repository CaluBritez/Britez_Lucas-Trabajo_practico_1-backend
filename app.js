const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Se conecta la Base de Datos
const { conectar } = require('./database');
conectar();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.use(require('./routers/rutas.js'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');
})

// Starting the server
app.listen(port, () => console.log('Todo bien en el puerto: '+port));