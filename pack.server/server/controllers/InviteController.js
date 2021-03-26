import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { inviteService } from '../services/InviteService'

export class InviteController extends BaseController {
  constructor() {
    super('api/invites')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllById)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await inviteService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.from = req.userInfo.id
      res.send(201, await inviteService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await inviteService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
