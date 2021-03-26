import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Invite = new Schema(
  {
    accepted: { type: Boolean, required: true, default: false },
    to: { type: String, required: true },
    from: { type: String, required: true },
    creatorId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Invite.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
export default Invite
