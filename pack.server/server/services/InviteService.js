import { dbContext } from '../db/DbContext'

class InviteService {
  async createInvite(body) {
    const invite = (await dbContext.Invite.create(body))
    return invite
  }

  async delete(id) {
    return await dbContext.Invite.findByIdAndDelete(id)
  }

  async getInvites(query = {}) {
    const invites = (await dbContext.Invite.find(query))
    return invites
  }
} export const inviteService = new InviteService()
