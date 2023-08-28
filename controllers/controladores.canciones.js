const Cancion = require('../models/Cancion.js');
const ctrlCancion = {};

ctrlCancion.crearCancion = async (req, res) => {
    const {
        id_playlist,
        artista,
        cancion,
        estado
    } = req.body; // JSON.stringify

    try {
        const nuevaCancion = await Cancion.create({
            id_playlist,
            artista,
            cancion,
            estado
        })

        return res.status(201).json({ message: 'Cancion creada con éxito', nuevaCancion })
    } catch (error) {
        console.error(error);
        console.log('Error al crear Cancion', error);
        return res.status(500).json({ message: 'Error al crear Cancion' })
    }
}

module.exports = ctrlCancion;