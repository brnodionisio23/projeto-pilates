const Sequelize = require('sequelize');
const database = require('../../config/db');

const Calendar = database.define('tb_calendario', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    hora: {
        type: Sequelize.TIME
    },
    data: {
        type: Sequelize.DATE
    }
})

module.exports = Calendar;