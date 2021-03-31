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

  async getAll(query) {
    const invitations = await dbContext.Invitation.find(query)
    return invitations
  }

  async deleteInvitation(id) {
    await dbContext.Invitation.findByIdAndDelete(id)
    return id
  }

  async acceptInvitation(id) {
    const invitation = await dbContext.Invitation.findOneAndUpdate({ id: id }, { accepted: true })
    return invitation
  }
}
export const invitationService = new InvitationService()
