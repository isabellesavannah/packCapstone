import { dbContext } from '../db/DbContext'

class InvitationService {
  async getMyInvitations(id) {
    const invitations = await dbContext.Invitation.find({ profileId: id })
    return invitations
  }

  async createInvitation(data) {
    const invitation = await dbContext.Invitation.create(data)
    return invitation
  }

  async deleteInvitation(id) {
    await dbContext.findOneByIdAndDelete(id)
    return id
  }
}
export const invitationService = new InvitationService()
