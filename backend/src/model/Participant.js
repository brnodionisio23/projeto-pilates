const Sequelize = require('sequelize');
const database = require('../../config/db');

const Participant = database.define('tb_aluno', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    contato: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    cpf: {
        type: Sequelize.STRING
    },
})

module.exports = Participant;