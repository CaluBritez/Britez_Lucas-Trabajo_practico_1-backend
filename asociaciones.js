const Usuario = require("./models/Usuario");
const Playlist = require("./models/Playlist");
const Cancion = require("./models/Cancion");

const relaciones = ()=>{
// Un Usuario a muchas Playlist
// Una Playlist un Usuario
Usuario.hasMany(Playlist, { 
    foreignKey: 'id_usuario'
});
Playlist.belongsTo(Usuario, {
    foreignKey: 'id_usuario'
});

// Una Playlist a muchas Canciones
// Una Cancion a una Playlist
Playlist.hasMany(Cancion, {
    foreignKey: 'id_playlist'
});
Cancion.belongsTo(Playlist, {
    foreignKey: 'id_playlist'
});
};

module.exports = relaciones;