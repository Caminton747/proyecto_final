const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // Solo si es necesario en tu versión de Mongoose
        });
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error de conexión: ${error.message}`);
        process.exit(1); // Finaliza el proceso si no se conecta
    }
};

module.exports = connectDB;
