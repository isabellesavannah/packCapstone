import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default class ProfileService {
  async getProfileById(id) {
    try {
      const res = await api.get('api/userprofile/' + id)
      AppState.activeProfile = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createProfile(newProfile) {
    try {
      const res = await api.post('api/userprofile', newProfile)
      AppState.profiles.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }
}
export const profileService = new ProfileService()
