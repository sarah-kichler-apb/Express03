// Instalar mysql2 e executar uma query simples

const express = require('express');
const mysql = require('mysql2');

const app = express()

app.listen(3000, () => {
    console.log('Servidor carregado.');
})

// Criamos a conexão com o banco de dados através do server
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
    database: 'nodejs_tasks'
})

conexao.connect(erro => {
    if (erro) {
        console.log('Erro na conexão com o MySQL' + erro.message);
        return
    }
    console.log('Conexão estabelecida');
})

// Criando uma rota que execute a query
app.get('/', (req, res) => {
    conexao.query('SELECT * FROM tasks', (err, results, fields) => {
        if (err) {
            console.log(err.message)
            res.send('Erro ao obter a lista de tarefas.')
        } else {
            res.send(results);
        }
    })
})