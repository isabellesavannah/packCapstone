import { dbContext } from '../db/DbContext'

class InviteService {
  async createInvite(body) {
    const invite = await dbContext.Invite.create(body)
    const invitation = await dbContext.Invitation.create({ profileId: body.to, inviteId: invite.id, accepted: body.accepted })
    return { invite, invitation }
  }

  async delete(id) {
    return await dbContext.Invite.findByIdAndDelete(id)
  }

  async getInvites(profileId) {
    const invites = (await dbContext.Invite.find({ to: profileId }))
    return invites
  }
} export const inviteService = new InviteService()
