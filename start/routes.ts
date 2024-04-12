import MomentsController from '#controllers/moments_controller'
import router from '@adonisjs/core/services/router'

//A rota abaixo cria um usuario no banco de dados
router.post('momentos', [MomentsController, 'store'])

//A rota abaixo vai mostrar todos os registros do Banco de dados:
router.get('momentos', [MomentsController, 'index'])

//A rota abaixo vai mostrar apenas um registro do banco de dados:
router.get('momentos/:id', [MomentsController, 'show'])

//A rota abaixo vai apagar um momento
router.delete('momentos/:id', [MomentsController, 'destroy'])

//A rota abaixo atualiza um registro
router.patch('momentos/:id', [MomentsController, 'update'])