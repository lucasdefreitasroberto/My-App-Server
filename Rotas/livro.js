const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Rota Livros');
})

router.get('/ovo', (req, res) => {
    res.send('OVO');
})

router.post('/', (req, res) => {
    res.send('Foi feito uma requisição Post')
})

router.patch('/', (req, res) => {
    res.send('Foi feito uma requisição Patch')
})

router.delete('/', (req, res) => {
    res.send('Foi feito uma requisição Delete')
})

module.exports = router;