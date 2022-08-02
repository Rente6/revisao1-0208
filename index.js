/* configs do servidor*/
// carregar p modulo express
const express = require("express")
//executar modulo express
const app = express()
//definir files ejs
app.set('views', './')
//criar uma instancia local
app.listen(3050, ()=>{
    console.log("servidor local em http://localhost:3050")
})

/* configuraçoes do servidor - fim */

//imortAR mongoose
const mongoose = require('mongoose')

//congig o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:cookie123456@fiaptecnico.b869f.mongodb.net/test')
}

/*config do banco de dados*/

/* rota to requisiçao*/
app.get('/',(req,res)=>{
    conexao()
   // res.send('Funcionando')
   res.render('index.ejs', {nome:"Alunos Feiosos", turma:"2emia", disciplina:"lp2", motivacao:"MORRA"})
})