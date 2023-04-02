const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Rota Livros');
})

router.get('/ovo', (req, res) => {
    res.send('index.js');
})

module.exports = router;