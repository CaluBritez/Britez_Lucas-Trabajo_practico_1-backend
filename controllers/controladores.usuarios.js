const Usuario = require('../models/Usuario.js');
const ctrlUsuario = {};
const bcrypt = require('bcrypt')

ctrlUsuario.crearUsuario = async (req, res) => {
    const {
        usuario,
        password,
        estado
    } = req.body; // JSON.stringify

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = await Usuario.create({
            usuario,
            password:hashedPassword,
            estado
        })

        return res.status(201).json({ message: 'Usuario creado con éxito', nuevoUsuario })
    } catch (error) {
        console.error(error);
        console.log('Error al crear Usuario', error);
        return res.status(500).json({ message: 'Error al crear Usuario' })
    }
}

module.exports = ctrlUsuario;