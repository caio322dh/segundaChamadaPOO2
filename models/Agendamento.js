const db = require('./db')

const Agendamento = db.sequelize.define('agendamentos', {
    data_entrega: {
        type: db.Sequelize.STRING
    },
    nome_fornecedor: {
        type: db.Sequelize.STRING
    },
    nome_motorista: {
        type: db.Sequelize.STRING
    },
    nome_comprador: {
        type: db.Sequelize.STRING
    },
    telefone_comprador: {
        type: db.Sequelize.STRING
    },
    sucata_entregue: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela

// Agendamento.sync({force: true})

module.exports = Agendamento
