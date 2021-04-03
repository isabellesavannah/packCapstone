<template>
  <div class="modal chatModal" id="chatModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form action="submit">
            <input type="text"
                   name="chatBody"
                   class="form-control"
                   placeholder="Enter Chat!"
                   aria-describedby="helpId"
                   v-model="state.newChat.body"
            />
            <button type="button" class="btn btn-danger" @click="createChat()">
              Send
            </button>
          </form>
          <Chat v-for="chat in state.chat" :key="chat.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
// eslint-disable-next-line no-unused-vars
import { reactive } from '@vue/reactivity'
// eslint-disable-next-line no-unused-vars
import { computed } from 'vue'
import { chatsService } from '../services/ChatsService'
import $ from 'jquery'

export default {
  name: 'ChatModal',
  props: {
    inviteProp: { type: Object, required: true }
  },

  setup(props) {
    const state = reactive({
      newChat: {},
      activeUserProfile: computed(() => AppState.activeProfile),
      myProfile: computed(() => AppState.myProfile),
      chat: computed(() => AppState.chats.filter((c) => c.to === state.myProfile.id)),
      invites: computed(() => AppState.invites),
      invitation: computed(() => AppState.invitations)
    })
    return {
      state,

      async createChat() {
        // eslint-disable-next-line no-unused-expressions
        // state.newChat.userProfileId = props.profile.id
        state.newChat.to = state.invitation.id
        await chatsService.createChat(state.newChat)
        $('#chatModal').modal('toggle')
        state.newChat = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
