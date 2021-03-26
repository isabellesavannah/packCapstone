import { dbContext } from '../db/DbContext'

class InvitationService {
  async getMyInvitations(id) {
    const invitations = await dbContext.Invitation.find({ profileId: id }).populate('creator')
    return invitations
  }
}
export const invitationService = new InvitationService()
