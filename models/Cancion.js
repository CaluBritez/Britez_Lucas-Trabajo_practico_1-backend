// Crear modelo de datos de Usuario
const { DataTypes, sequelize } = require('../database/database');

const Cancion = sequelize.define('Cancion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_playlist: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    artista: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cancion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'canciones'
});

Cancion.sync({ force: false }).then(() => {
    console.log('Tabla de Canciones creada');
});

module.exports = Cancion;