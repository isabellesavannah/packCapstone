import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { inviteService } from '../services/InviteService'
import InvitationController from '../controllers/InvitationController'

export class InviteController extends BaseController {
  constructor() {
    super('api/invites')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await inviteService.getInvites(req.query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.from = req.userInfo.id
      const invite = await inviteService.createInvite(req.body)
      await InvitationController.createInvitation(invite.id, req.body.to)
      res.send(201, invite)
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
