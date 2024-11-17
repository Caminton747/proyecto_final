const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['Hospedaje', 'Vacunación', 'Baño'], required: true },
    fecha: { type: Date, required: true },
    mascota: { type: mongoose.Schema.Types.ObjectId, ref: 'Mascota', required: true }
});

module.exports = mongoose.model('Servicio', servicioSchema);