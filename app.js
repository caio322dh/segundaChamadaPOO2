const express = require("express");
const app = express();
const handlbars = require("express-handlebars");
const bodyParser = require("body-parser")
const motorista = require ("./models/Motorista");
const Fornecedor = require("./models/Fornecedor");
const Agendamento = require("./models/Agendamento");
const comprador = require("./models/Comprador");

app.engine('handlebars', handlbars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//Rotas

app.get('/agendamento', function(req, res){
    Agendamento.findAll({order: [['id', 'DESC']]}).then(function(agendamentos){
        res.render('agendamento', {agendamento: agendamentos.map(agendamentos => agendamentos.toJSON())});
    })
    
})

app.get('/fornecedor', function(req, res){
    Fornecedor.findAll({order: [['id', 'DESC']]}).then(function(fornecedores){
        res.render('fornecedor', {fornecedor: fornecedores.map(fornecedores => fornecedores.toJSON())});
    })
    
})


app.get('/cad-agendamento', function(req, res){
    res.render('cad-agendamento');
});

app.get('/cad-motorista', function(req, res){
    res.render('cad-motorista');
});

app.get('/cad-fornecedor', function(req, res){
    res.render('cad-fornecedor');
});

app.get('/cad-comprador', function(req, res){
    res.render('cad-comprador');
});

app.post('/add-motorista', function(req, res){
    motorista.create({
        nome_motorista: req.body.nome_motorista,
        telefone_motorista: req.body.telefone_motorista
    }).then(function(){
       
        res.send("Motorista cadastrado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Não foi possivel cadastrar o motorista!" + erro)
    })
    // res.send("Nome: " + req.body.nome + "<br>Especialidade: " + req.body.especialidade + "<br>")
});

app.post('/add-fornecedor', function(req, res){
    Fornecedor.create({
        nome_fornecedor: req.body.nome_fornecedor
    }).then(function(){
       
        res.send("Fornecedor cadastrado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Não foi possivel cadastrar o fornecedor!" + erro)
    })
    // res.send("Nome: " + req.body.nome + "<br>Especialidade: " + req.body.especialidade + "<br>")
});

app.post('/add-comprador', function(req, res){
    comprador.create({
        nome_comprador: req.body.nome_comprador
    }).then(function(){
       
        res.send("Comprador cadastrado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Não foi possivel cadastrar o comprador!" + erro)
    })
    // res.send("Nome: " + req.body.nome + "<br>Especialidade: " + req.body.especialidade + "<br>")
});

app.post('/add-agendamento', function(req, res){
    Agendamento.create({
        data_entrega: req.body.data_entrega,
        nome_fornecedor: req.body.nome_fornecedor,
        nome_motorista: req.body.nome_motorista,
        nome_comprador: req.body.nome_comprador,
        telefone_comprador: req.body.telefone_comprador,
        sucata_entregue: req.body.sucata_entregue
    }).then(function(){
        res.redirect('/agendamento')
        // res.send("Agendamento cadastrado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Não foi possivel cadastrar o agendamento!" + erro)
    })
    // res.send("Nome: " + req.body.nome + "<br>Especialidade: " + req.body.especialidade + "<br>")
})

app.get('/del-agendamento/:id', function(req, res){
    Agendamento.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/agendamento')
        // res.send("Agendamento cancelado com sucesso!");
    }).catch(function(erro){
        res.send("Erro ao cancelar agendamento!");
    })
});

app.get('/del-fornecedor/:id', function(req, res){
    Fornecedor.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/fornecedor')
        // res.send("Agendamento cancelado com sucesso!");
    }).catch(function(erro){
        res.send("Erro ao cancelar agendamento!");
    })
});




app.listen(8080);












// 2ª Part

// const express = require("express");
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('caio', 'caioone', '123456', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize.authenticate().then(function(){
//     console.log('Conexão realizada com sucesso');
// }).catch(function(err){
//     console.log('Erro ao realizar a conexão com BD:' +err);
// });

// // Criar tabela com sequileza

// const Medico = sequelize.define('medicos', {
//     nome: {
//         type: Sequelize.STRING,
//     },
//     especialidade: {
//         type: Sequelize.STRING
//     }
// });

// Medico.create({
//     nome: "Marcio Tannure",
//     especialidade: "Fisioterapeuta"
// })



// 1ª Part


//User.sync({force: true});

// const app = express();

// //Conexao com BD MySQL
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'caioone',
//     password : '123456',
//     database : 'caio'
//   });

//   connection.connect(function(err) {
//     if (err) 
//       console.error('error connecting: ' + err.stack);
//       return;
// });

// connection.query("INSERT INTO cadastrar_paciente(nome_paciente) VALUES ('João de Souza')", function(err, result){
//     if(!err){
//         console.log('Paciente cadastrado com sucesso!');
//     }else{
//         console.log('Erro ao cadastrar paciente!');
//     }
// });

// connection.query("UPDATE cadastrar_paciente SET nome = ")



// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/src/index.html");
    
// });

// app.get("/cadastrar-medico", function(req, res){
//     res.sendFile(__dirname + "/src/cadastrar-medico.html");
// });

// app.get("/cadastrar-paciente", function(req, res){
//     res.sendFile(__dirname + "/src/cadastrar-paciente.html");
// });

// app.listen(8080);
