const express = require('express');
const router = express.Router();
const {
    crearMascota,
    obtenerMascota,
    obtenerMascotas,
    actualizarMascota,
    eliminarMascota,
} = require('../controllers/mascotasController');

// Rutas para las mascotas
router
    .post('/', crearMascota)
    .get('/:id', obtenerMascota)
    .get('/', obtenerMascotas)
    .put('/:id', actualizarMascota)
    .delete('/:id', eliminarMascota);

module.exports = router;
