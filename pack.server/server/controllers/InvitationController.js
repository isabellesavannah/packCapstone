import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { invitationService } from '../services/InvitationService'

export class InvitationController extends BaseController {
  constructor() {
    super('api/invitations')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await invitationService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const invitation = await invitationService.createInvitation(req.body)
      res.send(201, invitation)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await invitationService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
