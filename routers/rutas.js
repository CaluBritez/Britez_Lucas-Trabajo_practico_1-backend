const { Router } = require('express');
const router = Router();
const {crearPlaylist, obtenerPlaylists, obtenerPlaylist, actualizarPlaylist, eliminarPlaylist} = require('../controllers/controladores.js');



// Obtener todas las playlist
router.get('/api', obtenerPlaylists);

// Obtener una playlist
router.get('/api/:id', obtenerPlaylist);

// Crear una Playlist
router.post('/api', crearPlaylist);

// Actualizar una playlist
router.put('/api/:id', actualizarPlaylist);

// Eliminar una playlist de forma lógica
router.delete('/api/:id', eliminarPlaylist);

module.exports = router;