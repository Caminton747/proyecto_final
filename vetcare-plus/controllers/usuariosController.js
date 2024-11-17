const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario' });
    }
};

exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario' });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find(); // Esto obtendrá todos los documentos en la colección de usuarios
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
