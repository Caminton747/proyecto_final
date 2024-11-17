const express = require('express');
const router = express.Router();
const mascotasController = require('../controllers/mascotasController');

router.post('/', mascotasController.crearMascota);
router.get('/:id', mascotasController.obtenerMascota);
router.get('/', mascotasController.obtenerMascotas);
router.put('/:id', mascotasController.actualizarMascota);
router.delete('/:id', mascotasController.eliminarMascota);

module.exports = router;
