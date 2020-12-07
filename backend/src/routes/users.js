//encargado de manejar las rutas de los usuarios

const { Router } = require('express'); //importamos la funcion Router
const { route } = require('./notes');
const router = Router(); //devuelve un objeto
const { getUsers, createUsers, deleteUsers } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUsers)
    .delete(deleteUsers)

router.route('/:id')
    .get(getUsers)
    .put(createUsers)
    .delete(deleteUsers)    

module.exports = router;