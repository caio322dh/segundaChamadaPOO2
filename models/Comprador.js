const db = require('./db')

const Comprador = db.sequelize.define('compradores', {
    nome_comprador: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela

// Comprador.sync({force: true})

module.exports = Comprador