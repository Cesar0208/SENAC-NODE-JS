// Criando API Node JS
const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

// Criando Rotas
let users = [
    {id: 1, nome: 'Cleber'},
    {id: 2, nome: 'Bianca'},
    {id: 3, nome: 'Jão'}
];

// Rota GET
app.get("/usuarios", (req, res) => {
    res.json(users);
})

// Rota POST

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});