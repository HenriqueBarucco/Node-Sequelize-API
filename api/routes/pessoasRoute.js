const { Router } = require('express')
const { pegaTodasAsPessoas, pegaUmaPessoa, criaPessoa, atualizaPessoa, apagaPessoa } = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', pegaTodasAsPessoas)
router.get('/pessoas/:id', pegaUmaPessoa)
router.post('/pessoas', criaPessoa)
router.put('/pessoas/:id', atualizaPessoa)
router.delete('/pessoas/:id', apagaPessoa)

module.exports = router