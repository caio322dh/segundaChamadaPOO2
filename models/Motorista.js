const db = require('./db')

const Motorista = db.sequelize.define('motoristas', {
    nome_motorista: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    }
   
})

//Criar a tabela

// Motorista.sync({force: true})

module.exports = Motorista