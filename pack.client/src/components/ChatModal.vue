<template>
  <div class="modal createChatModal" :id="'createChatModal' + userProfile.id" tabindex="-1" role="dialog">
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
  name: 'Chat',
  setup() {
    const state = reactive({
      newChat: {},
      activeUserProfile: computed(() => AppState.activeProfile),
      chats: computed(() => AppState.chats.filter((c) => c.userId === state.userProfile.id))
    })
    return {
      state,
      async createChat() {
        // eslint-disable-next-line no-unused-expressions
        // state.newChat.userProfileId = props.profile.id
        await chatsService.createChat(state.newChat)
        $('#createChatModal' + `${state.newChat.id}`).modal('toggle')
        state.newChat = {}
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
