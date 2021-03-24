import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class ChatService {
  async create(body) {
    return await dbContext.Chat.create(body)
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
