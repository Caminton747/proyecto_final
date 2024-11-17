const Servicio = require('../models/Servicio');

exports.crearServicio = async (req, res) => {
    const servicio = new Servicio(req.body);
    try {
        await servicio.save();
        res.status(201).json(servicio);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el servicio' });
    }
};

exports.obtenerServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });
        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el servicio' });
    }
};

exports.actualizarServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });
        res.json(servicio);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el servicio' });
    }
};

exports.eliminarServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndDelete(req.params.id);
        if (!servicio) return res.status(404).json({ error: 'Servicio no encontrado' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el servicio' });
    }
};

exports.obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find(); 
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los servicios' });
    }
};