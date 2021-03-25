import { AppState } from '../AppState'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  // register listeners for the room messages/emits that come from the server
  constructor() {
    super()
    this
      .on('create:post', this.createPost)
      .on('remove:post', this.removePost)
      .on('update:post', this.updatePost)
  }

  authenticate(bearerToken) {
    this.socket.emit('authenticate', bearerToken)
  }

  connected(payload) {
    console.log(payload.message)
  }

  createPost(payload) {
    console.log(payload)
    AppState.posts.push(payload)
  }

  removePost(id) {
    const index = AppState.posts.findIndex(p => p.id === id)
    AppState.posts.splice(index, 1)
  }

  updatePost(payload) {
    const index = AppState.posts.findIndex(p => p.id === payload.id)
    AppState.posts.splice(index, 1, payload)
  }
}

export const socketService = new SocketService()
