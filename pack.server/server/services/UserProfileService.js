import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import socketService from './SocketService'
class UserProfileService {
  async create(body) {
    const profile = await dbContext.UserProfile.create(body)
    socketService.messageRoom('general', 'create:profile', profile)
    return profile
  }

  async delete(id) {
    const closedUserProfile = await dbContext.UserProfile.findOneAndUpdate({ _id: id }, { closed: true })
    socketService.messageRoom('general', 'close:profile', closedUserProfile)
    return closedUserProfile
  }

  async findById(id) {
    const UserProfile = await dbContext.UserProfile.findById(id).populate('creator')
    if (!UserProfile) {
      throw new BadRequest('Invalid Id')
    }
    return UserProfile
  }

  async find(query = {}) {
    return await dbContext.UserProfile.find(query).populate('creator')
  }

  // async editUserProfile(id, update, userId) {
  //   let UserProfile = await this.findById(id)
  //   if (UserProfile.creatorId !== userId) {
  //     // if json throw a UserProfile._doc.watevs
  //     throw new BadRequest('Unauthorized')
  //   }
  //   const editUserProfile = await this.findById(id)
  //   if (!editUserProfile.closed) {
  //     // const NOTE
  //   }
  //   delete update.closed
  //   UserProfile = await dbContext.UserProfile.findOneAndUpdate({ _id: id, closed: false }, update, {
  //     new: true
  //   })
  //   if (!UserProfile) {
  //     throw new BadRequest('Invalid ID')
  //   }
  //   return UserProfile
  // }

  async editUserProfile(id, editedProfile, userId) {
    const UserProfile = await this.findById(id)
    if (UserProfile.creatorId !== userId) {
      throw new BadRequest('Unauthorized')
    }
    const profile = await dbContext.UserProfile.findOneAndUpdate({ _id: id }, editedProfile)
    if (!profile) {
      throw new BadRequest('invalid id')
    }
    return profile
  }
}

export const userProfileService = new UserProfileService()
