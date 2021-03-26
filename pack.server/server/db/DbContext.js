import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import UserProfileSchema from '../models/UserProfile'
import InviteSchema from '../models/Invite'
import ChatSchema from '../models/Chat'
import InvitationSchema from '../models/Invitation'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  UserProfile = mongoose.model('UserProfile', UserProfileSchema);
  Invite = mongoose.model('Invite', InviteSchema);
  Chat = mongoose.model('Chat', ChatSchema);
  Invitation = mongoose.model('Invitation', InvitationSchema)
}

export const dbContext = new DbContext()
