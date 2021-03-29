/* eslint-disable indent */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Invitation = new Schema({
  inviteId: { type: ObjectId, ref: 'Invite', required: true },
  profileId: { type: ObjectId, ref: 'UserProfile', required: true },
  accepted: { type: Boolean, ref: 'Invite', required: true }
},
  // eslint-disable-next-line indent
  { timestamps: true, toJSON: { virtuals: true } }
)
Invitation.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
export default Invitation
