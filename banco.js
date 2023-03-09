const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

//agendamentos.sync({force: true})

agendamentos.create({
    nome: "Andrea Felipe Gomes",
    endereco: "Av local",
    bairro: "Jd qualquer",
    cep: 12345678,
    cidade:"São Paulo",
    estado:"SP",
    observacao:"Teste aula"
})