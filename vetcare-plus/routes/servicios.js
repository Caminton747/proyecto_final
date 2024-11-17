const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');

router.post('/', serviciosController.crearServicio);
router.get('/:id', serviciosController.obtenerServicio);
router.get('/', serviciosController.obtenerServicios); 
router.put('/:id', serviciosController.actualizarServicio);
router.delete('/:id', serviciosController.eliminarServicio);

module.exports = router;
