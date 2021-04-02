import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { userProfileService } from '../services/UserProfileService'

import { invitationService } from '../services/InvitationService'
import { inviteService } from '../services/InviteService'
export class UserProfileController extends BaseController {
  constructor() {
    super('api/UserProfile')
    this.router
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getUserProfileById)

      .post('', this.createUserProfile)
      .put('/:id', this.editUserProfile)
      .delete('/:id', this.closeUserProfile)
      // Calling Invitation Service
      .get('/:id/invitations', this.getMyInvitations)
      .get('/:id/invites', this.getInvites)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await userProfileService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getUserProfileById(req, res, next) {
    try {
      return res.send(await userProfileService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createUserProfile(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(201, await userProfileService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editUserProfile(req, res, next) {
    try {
      const data = await userProfileService.editUserProfile(req.params.id, req.body, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
      // delete prop off an object, + hide button req.b.cl = wat we want
    }
  }

  async closeUserProfile(req, res, next) {
    try {
      res.send(await userProfileService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  // Invitation Service Methods
  async getMyInvitations(req, res, next) {
    try {
      const myInvitations = await invitationService.getMyInvitations(req.params.id)
      res.send(myInvitations)
    } catch (error) {
      next(error)
    }
  }

  async getInvites(req, res, next) {
    try {
      const myInvites = await inviteService.getInvites(req.params.id)
      res.send(myInvites)
    } catch (error) {
      next(error)
    }
  }
}
