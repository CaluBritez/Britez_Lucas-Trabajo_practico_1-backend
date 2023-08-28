const Playlist = require('../models/Playlist.js');
const ctrlPlaylist = {};

// Obtener todas las playlist
ctrlPlaylist.obtenerPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.findAll({
            where: {
                estado: true
            }
        });
        return res.json(playlists);
    } catch (error) {
        console.log('Error al obtener las playlists', error);
        return res.status(500).json({
            message: 'Error al obtener las playlists'
        })
    }
}
// Obtener una playlist
ctrlPlaylist.obtenerPlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findByPk(id);
        return res.json(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la playlist buscada'
        })
    }
}

// Crear una playlist
ctrlPlaylist.crearPlaylist = async (req, res) => {
    const {
        id_usuario,
        nombre,
        visible,
        estado
    } = req.body; // JSON.stringify

    try {
        const nuevaPlaylist = await Playlist.create({
            id_usuario,
            nombre,
            visible,
            estado
        })

        return res.status(201).json({ message: 'Playlist creada con éxito', nuevaPlaylist })
    } catch (error) {
        console.error(error);
        console.log('Error al crear Playlist', error);
        return res.status(500).json({ message: 'Error al crear Playlist' })
    }
}

// Actualizar una Playlist
ctrlPlaylist.actualizarPlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findByPk(id);

        console.log(playlist);

        if (!playlist) {
            return res.status(500).json(
                {
                    message:"Error"
                })
        }

        await playlist.update(req.body)
        return res.json({
            message: 'Playlist actualizada exitosamente'
        });
    } catch (error) {
        console.log('Error al actualizar la playlist', error);
        return res.status(500).json({
            message: 'Error al actualizar la playlist'
        })
    }
}

// Eliminar una Playlist de forma lógica
ctrlPlaylist.eliminarPlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.findByPk(id);
        await playlist.update({ estado: false });
        return res.json({ message: 'La Playlist se eliminó correctamente' })
    } catch (error) {
        console.log('Error al eliminar la Playlist', error);
        return res.status(500).json({
            message: 'Error al eliminar la Playlist'
        })
    }
}

module.exports = ctrlPlaylist;
