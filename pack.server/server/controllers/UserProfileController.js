import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { userProfileService } from '../services/UserProfileService'
import { chatService } from '../services/ChatService'
export class UserProfileController extends BaseController {
  constructor() {
    super('api/UserProfile')
    this.router
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getUserProfileById)
      .get('/:id/chat', this.getChatById)
      .post('', this.createUserProfile)
      .put('/:id', this.editUserProfile)
      .delete('/:id', this.closeUserProfile)
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

  async getChatById(req, res, next) {
    try {
      res.send(await chatService.find())
    } catch (error) {
      next(error)
    }
  }
}