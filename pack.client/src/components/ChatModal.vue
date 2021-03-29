<template>
  <div class="modal createChatModal" :id="'createChatModal' + list.id" tabindex="-1" role="dialog">
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
import $ from 'jquery'
import { AppState } from '../AppState'
import { chatsService } from '../services/ChatsService'
import { reactive } from '@vue/reactivity'
import { compile, computed } from 'vue'

export default {
  name: 'Chat',
  },
  setup() {
    const state = reactive({
      newChat: {},
      activeUserProfile: computed (()=> AppState.activeProfile),
      chats: computed(() => AppState.chats.filter((c)=> c.userId === state.userProfile.id))
    })
    return {
      state,
      async createChat() {
        state.newChat.userId
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
