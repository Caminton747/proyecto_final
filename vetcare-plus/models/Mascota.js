const mongoose = require('mongoose');

// Definición del esquema de Mascota
const mascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String
    },
    edad: {
        type: Number
    },
    propietario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    historialMedico: {
        type: String
    },
    servicios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servicio'
    }]
});

// Creación y exportación del modelo Mascota
module.exports = mongoose.model('Mascota', mascotaSchema);
