const db = require('./db')

const Fornecedor = db.sequelize.define('fornecedores', {
    nome_fornecedor: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela

// Fornecedor.sync({force: true})

module.exports = Fornecedor