import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { chatService } from '../services/ChatService'

export class ChatController extends BaseController {
  constructor() {
    super('api/chat')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .get('', this.getAllById)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  // async getAllById(req, res, next) {
  //   try {
  //     return res.send(await chatService.findById(req.params.id))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.from = req.userInfo.id
      res.send(201, await chatService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await chatService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
