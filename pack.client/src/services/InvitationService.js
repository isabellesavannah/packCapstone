import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default class InvitationService {
  async getAll() {
    try {
      const res = await api.get('api/invitations')
      AppState.invitations = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getInvitationById(id) {
    try {
      const res = await api.get('api/UserProfile/' + id + '/invitations')
      AppState.invitations = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createInvitation(newInvitation) {
    try {
      const res = await api.post('api/invitations', newInvitation)
      AppState.invitations.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteActiveInvitation(id) {
    try {
      await api.delete('api/invitations/' + id)
    } catch (error) {
      logger.error(error)
    }
  }
}
export const invitationService = new InvitationService()
