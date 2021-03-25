import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Chat = new Schema(
  {
    body: { type: String, required: true },
    to: { type: String, required: true },
    from: { type: String, required: true },
    recieved: { type: Boolean, required: true, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Chat.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Chat
