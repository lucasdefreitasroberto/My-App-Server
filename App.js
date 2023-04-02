const express = require('express');
const app = express();
const port = 8000;
const rotaLivro = require('./Rotas/livro');

app.use('/livros', rotaLivro)

app.get('/', (req, res) => {
    res.send('Olá Mundo !');
})

app.listen(port, () => {
    console.log(`Servidor Rodando http://localhost:${port}`);
})

