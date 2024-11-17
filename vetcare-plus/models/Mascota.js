const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    raza: { type: String },
    edad: { type: Number },
    propietario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    historialMedico: String,
    servicios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servicio' }]
});

module.exports = mongoose.model('Mascota', mascotaSchema);