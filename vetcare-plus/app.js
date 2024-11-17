
const express = require('express');
const dotenv = require('dotenv');


dotenv.config();


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connectDB = require('./config/db');
connectDB();


app.get('/', (req, res) => {
    res.send('VetCarePlus API');
});


const usuariosRoutes = require('./routes/usuarios');
const mascotasRoutes = require('./routes/mascotas');
const serviciosRoutes = require('./routes/servicios');

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/mascotas', mascotasRoutes);
app.use('/api/servicios', serviciosRoutes);


const startServer = (app, port) => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
};

module.exports = startServer;