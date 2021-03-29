import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { invitationService } from '../services/InvitationService'

export default class InvitationController extends BaseController {
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

  async createInvitation(req, res, next) {
    try {
      const invitation = await invitationService.createInvitation(req.body)
      res.send(201, invitation)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await invitationService.deleteInvitation(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
