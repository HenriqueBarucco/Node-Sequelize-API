const { Router } = require('express')
const { pegaTodasAsPessoas } = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', pegaTodasAsPessoas)

module.exports = router