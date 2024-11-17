const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a la base de datos');
    } catch (err) {
        console.error('Error conectando a la base de datos:', err);
        process.exit(1);
    }
};

module.exports = connectDB;