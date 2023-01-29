const { Router } = require('express')
const { pegaTodasAsPessoas, pegaUmaPessoa, criaPessoa, atualizaPessoa, apagaPessoa, pegaUmaMatricula, criaMatricula, atualizaMatricula, apagaMatricula } = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', pegaTodasAsPessoas)
router.get('/pessoas/:id', pegaUmaPessoa)
router.post('/pessoas', criaPessoa)
router.put('/pessoas/:id', atualizaPessoa)  
router.delete('/pessoas/:id', apagaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', apagaMatricula)

module.exports = router