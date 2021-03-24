import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Invite = new Schema(
  {
    partySize: { type: Number },
    location: { type: String },
    duration: { type: Number },
    date: { type: Date },
    time: { type: Number },
    accept: { type: Boolean },
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
