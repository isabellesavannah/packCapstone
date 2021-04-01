import { dbContext } from '../db/DbContext'

class InvitationService {
  async getMyInvitations(id) {
    const invitations = await dbContext.Invitation.find({ profileId: id }).populate({
      path: 'inviteId',
      populate: { path: 'creator' }
    })
    return invitations
  }

  async createInvitation(data) {
    const invitation = await dbContext.Invitation.create(data)
    return invitation
  }

  async getAll(query = {}) {
    const invitations = await dbContext.Invitation.find(query)
    return invitations
  }

  async deleteInvitation(id) {
    await dbContext.Invitation.findByIdAndDelete(id)
    return id
  }

  async acceptInvitation(id) {
    const invitation = await dbContext.Invitation.findOneAndUpdate({ _id: id }, { accepted: true })
    if (!invitation) {
      throw new Error('That invitation does not exist')
    }
    return invitation
  }
}
export const invitationService = new InvitationService()
