const express = require('express');
const router = express.Router();
const {
    crearServicio,
    obtenerServicio,
    obtenerServicios,
    actualizarServicio,
    eliminarServicio,
} = require('../controllers/serviciosController');

// Rutas para los servicios
router
    .post('/', crearServicio)
    .get('/:id', obtenerServicio)
    .get('/', obtenerServicios)
    .put('/:id', actualizarServicio)
    .delete('/:id', eliminarServicio);

module.exports = router;
