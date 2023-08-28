const { Sequelize, DataTypes } = require('sequelize');

// Instancia de conexión a la Base de Datos
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });

const conectar = async () => {

    try {
        await sequelize.authenticate()
        console.log('Base de datos Conectada');
    } catch (error) {
        console.log('ERROR AL CONECTAR DB: ', error);
    }
};
 module.exports = {
    sequelize,
    DataTypes,
    conectar
}