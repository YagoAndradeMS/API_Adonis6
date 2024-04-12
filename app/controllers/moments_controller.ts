import Momento from '#models/momento'
import type { HttpContext } from '@adonisjs/core/http'

export default class MomentsController {

  //-------------------------------------------------
  public async store({ request, response }: HttpContext) {
    const body = request.body()
    const momento = await Momento.create(body)
    response.status(201)
    return {
      message: 'Momento criado com sucesso! ',
      data: momento
    }
  }
  //-------------------------------------------------

  public async index() {

    const momentos = await Momento.all()

    return {
      data: momentos
    }

  }
  //--------------------------------------------------
  public async show({ params }: HttpContext) {

    const momento = await Momento.findOrFail(params.id)

    return {
      data: momento
    }
  }
  //---------------------------------------------------
  public async destroy({ params }: HttpContext) {
    const momento = await Momento.findOrFail(params.id)

    await momento.delete()

    return {
      message: 'Momento apagado com sucesso!',
      data: momento
    }
  }
  //---------------------------------------------------
  public async update({ params, request }: HttpContext) {
    const momento = await Momento.findOrFail(params.id)

    const body = request.body()

    momento.title = body.title
    momento.description = body.description

    await momento.save()

    return {
      message: 'Momento atualizado com sucesso!',
      data: momento
    }
  }


}