import { dbContext } from '../db/DbContext'

class InvitationService {
  async getMyInvitations(id) {
    const invitations = await dbContext.Invitation.find({ profileId: id })
    return invitations
  }

  async createInvitation(inviteId, profileId) {
    const invitation = await dbContext.Invitation.create({ inviteId: inviteId, profileId: profileId, accepted: false })
    return invitation
  }
}
export const invitationService = new InvitationService()
