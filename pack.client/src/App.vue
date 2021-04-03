<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view :key="$route.fullPath" />
  </main>
  <footer class="fixed-bottom">
    <div class="bg text-light text-center p-4">
      Chasin Tail LLC
      <button class="btn btn-danger float-left" data-target="#chatModal" data-toggle="modal">
        opennn chat
      </button>
    </div>
    <ChatModal />
  </footer>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from './AppState'
import { inviteService } from './services/InviteService'
import { profileService } from './services/ProfileService'
import { invitationService } from './services/InvitationService'
import { chatsService } from './services/ChatsService'
export default {
  name: 'App',
  setup() {
    const state = reactive({
      invitations: computed(() => AppState.invitations),
      filteredInvitations: computed(() => AppState.invitations.filter(i => !i.accepted)),
      chat: computed(() => AppState.chats),
      invites: computed(() => AppState.invites),
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile),
      myProfile: computed(() => AppState.myProfile)
    })
    onMounted(async() => {
      await profileService.getProfileById(state.myProfile.id)
      await invitationService.getInvitationById(state.myProfile.id)

      await inviteService.getInvitesByProfileId(state.myProfile.id)
      await state.invites.forEach(i => chatsService.getAllChatsById(i.id))
    })
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.bg{
  background-color: #000000;
  box-shadow: 2px 6px 8px 10px aqua;

}
.modal-backdrop{
 z-index: -1!important;
 position: absolute;
}
</style>
