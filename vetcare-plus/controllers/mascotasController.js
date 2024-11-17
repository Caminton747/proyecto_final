const Mascota = require('../models/Mascota');

exports.crearMascota = async (req, res) => {
    const mascota = new Mascota(req.body);
    try {
        await mascota.save();
        res.status(201).json(mascota);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la mascota' });
    }
};

exports.obtenerMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) return res.status(404).json({ error: 'Mascota no encontrada desafortunadamente' });
        res.json(mascota);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la mascota' });
    }
};

exports.actualizarMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!mascota) return res.status(404).json({ error: 'Mascota no encontrada' });
        res.json(mascota);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la mascota' });
    }
};

exports.eliminarMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findByIdAndDelete(req.params.id);
        if (!mascota) return res.status(404).json({ error: 'Mascota no encontrada' });
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la mascota' });
    }
};

exports.obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find(); 
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
};
