import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import socketService from './SocketService'
class ChatService {
  async create(body) {
    const chat = (await dbContext.Chat.create(body))

    socketService.messageRoom(body.to, 'create:chat', chat)

    return chat
  }

  async delete(id) {
    return await dbContext.Chat.findByIdAndDelete(id)
  }

  async findById(id) {
    const chat = await dbContext.Chat.findById(id).populate('creator')
    if (!chat) {
      throw new BadRequest('Invalid Id')
    }
    return chat
  }

  async find(query = {}) {
    return await dbContext.Chat.find(query).populate('creator')
  }
}
export const chatService = new ChatService()
