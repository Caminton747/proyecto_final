const express = require('express');
const router = express.Router();
const {
    crearUsuario,
    obtenerUsuario,
    obtenerUsuarios,
    actualizarUsuario,
    eliminarUsuario,
} = require('../controllers/usuariosController');

// Rutas para los usuarios
router
    .post('/', crearUsuario)
    .get('/:id', obtenerUsuario)
    .get('/', obtenerUsuarios)
    .put('/:id', actualizarUsuario)
    .delete('/:id', eliminarUsuario);

module.exports = router;
