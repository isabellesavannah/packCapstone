// import { AppState } from '../AppState'
import { AppState } from '../AppState'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  // register listeners for the room messages/emits that come from the server
  constructor() {
    super()
    this
      .on('create:chat', this.createChat)
      .on('create:profile', this.createProfile)
      .on('close:profile', this.closeProfile)
  }

  authenticate(bearerToken) {
    this.socket.emit('authenticate', bearerToken)
  }

  connected(payload) {
    console.log(payload.message)
  }

  createChat(payload) {
    console.log('chat created')
  }

  createProfile(payload) {
    console.log('profile created', payload)
    AppState.profiles.push(payload)
  }

  closeProfile(payload) {
    const index = AppState.profiles.findIndex(p => p.id === payload.id)
    AppState.profiles.splice(index, 1, payload)
    console.log('closeProfile')
    return payload
  }
}

export const socketService = new SocketService()
