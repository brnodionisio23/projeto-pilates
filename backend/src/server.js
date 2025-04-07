const express = require('express')
const sequelize = require('../config/db');
const app = express()
const port = 3000

const Professor = require('./model/Teacher');
const Participant = require('./model/Participant');
const Calendar = require('./model/Calendar');

async function runServer() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso');

        await sequelize.sync();
        console.log('Tabelas sincronizadas com sucesso');

        app.listen(port, () => {
            console.log(`Servidor rodando na porta: ${port}`);
        });

    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
}

runServer();