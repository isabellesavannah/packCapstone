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

export default Chat
