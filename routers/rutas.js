const { Router } = require('express');
const router = Router();
const {crearPlaylist, obtenerPlaylists, obtenerPlaylist, actualizarPlaylist, eliminarPlaylist} = require('../controllers/controladores.playlist.js');
const {crearUsuario} = require('../controllers/controladores.usuarios.js');
const {crearCancion} = require('../controllers/controladores.canciones.js');
const { validacion, validarEsquema } = require('../middleware/exp-vali.js');

// ------------------------------------------------------------------------------------
// ----------------- OPERACIONES USUARIO ---------------------------------------------
// ------------------------------------------------------------------------------------
// Crear Usuario
router.post('/usuario', validacion,validarEsquema,crearUsuario);
// ------------------------------------------------------------------------------------
// ----------------- OPERACIONES CANCIONES ---------------------------------------------
// ------------------------------------------------------------------------------------
// Crear Cancion
router.post('/cancion/:id_playlist', crearCancion);

// ------------------------------------------------------------------------------------
// ----------------- OPERACIONES PLAYLIST ---------------------------------------------
// ------------------------------------------------------------------------------------
// Obtener todas las playlist
router.get('/playlist', obtenerPlaylists);

// Obtener una playlist
router.get('/playlist/:id', obtenerPlaylist);

// Crear una Playlist
router.post('/playlist/:id_usuario', crearPlaylist);

// Actualizar una playlist
router.put('/playlist/:id', actualizarPlaylist);

// Eliminar una playlist de forma lógica
router.delete('/playlist/:id', eliminarPlaylist);

module.exports = router;