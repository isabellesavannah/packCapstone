import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default class InviteService {
  async getAll() {
    try {
      const res = await api.get('api/invites')
      AppState.invites = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  // async getInviteById(id) {
  //   try {
  //     const res = await api.get('api/UserProfile/' + id + '/invites/')
  //     AppState.invites = res.data
  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }

  async createInvite(newInvite) {
    try {
      const res = await api.post('api/invites', newInvite)
      AppState.invites.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteActiveInvite(id) {
    try {
      await api.delete('api/invites/' + id)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const inviteService = new InviteService()
