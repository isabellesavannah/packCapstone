import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserProfile = new Schema(
  {
    petName: {type: Number, required: true},
    img: {type: String, required: true},
    bio: {type: String, required: true},
    size: {type: Number, required: true},
    sex:{ type: String, required: true},
    fixed:{type:Boolean, required:true},
    engergy: {type: Number, required:true},
    location:{type: String},
    dnd:{type:Boolean},
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
