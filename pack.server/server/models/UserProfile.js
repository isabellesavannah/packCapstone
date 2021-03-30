import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserProfile = new Schema(
  {
    petName: { type: String, required: true },
    img: { type: String, required: true },
    bio: { type: String, required: true },
    size: { type: String, required: true },
    sex: { type: String, required: true },
    fixed: { type: String, required: true },
    energy: { type: String, required: true },
    location: { type: String },
    status: { type: Boolean, required: true, default: false },
    closed: { type: Boolean, required: true, default: false },
    creatorId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
UserProfile.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
export default UserProfile
