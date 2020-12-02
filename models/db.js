const Sequelize = require("sequelize")

const sequelize = new Sequelize('caio', 'caioone', '123456', {
    host: 'localhost', 
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}