const { Router } = require('express')
const { pegaTodasAsPessoas, pegaUmaPessoa, criaPessoa, atualizaPessoa, apagaPessoa, pegaUmaMatricula, criaMatricula, atualizaMatricula, apagaMatricula, restauraPessoa, restauraMatricula, pegaPessoasAtivas, pegaMatriculas, pegaMatriculasPorTurma, pegaTurmasLotadas } = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', pegaPessoasAtivas)
  .get('/pessoas/todos', pegaTodasAsPessoas)
  .get('/pessoas/:id', pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula', pegaMatriculas)
  .get('/pessoas/matricula/:turmaId/confirmadas', pegaMatriculasPorTurma)
  .get('/pessoas/matricula/lotada', pegaTurmasLotadas)
  .post('/pessoas', criaPessoa)
  .put('/pessoas/:id', atualizaPessoa)
  .delete('/pessoas/:id', apagaPessoa)
  .post('/pessoas/:id/restaura', restauraPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', pegaUmaMatricula)
  .post('/pessoas/:estudanteId/matricula', criaMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', apagaMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', restauraMatricula)

module.exports = router