const mongoose = require('mongoose');

// Definición del esquema de Servicio
const servicioSchema = new mongoose.Schema({
    tipo: {
        type: String,
        enum: ['Hospedaje', 'Vacunación', 'Baño'],
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    mascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota',
        required: true
    }
});

// Creación y exportación del modelo Servicio
module.exports = mongoose.model('Servicio', servicioSchema);