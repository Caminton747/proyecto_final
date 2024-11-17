const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/', usuariosController.crearUsuario);
router.get('/:id', usuariosController.obtenerUsuario);
router.get('/', usuariosController.obtenerUsuarios);
router.put('/:id', usuariosController.actualizarUsuario);
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;
