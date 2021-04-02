import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class ChatsService {
  async getAllChatsById(id) {
    try {
      const res = await api.get('api/invites/' + id + '/chat')
      AppState.chats = [...res.data]
    } catch (error) {
      logger.error(error)
    }
  }

  async createChat(newChat) {
    try {
      const res = await api.post('api/chats', newChat)
      // AppState.chats[newChat.userProfileId].push.(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }
}
export const chatsService = new ChatsService()
