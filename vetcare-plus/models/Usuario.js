const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    tipoUsuario: { type: String, enum: ['Propietario', 'Administrador', 'Veterinario', 'Cuidador'], required: true },
    mascotas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mascota' }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);