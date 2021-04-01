<template>
  <div class="Invitation">
    <div class="card m-2 d-flex justify-content-center" style="width 100%">
      <!-- <img class="card-img-top" :src="userProfile.img"> -->
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ invitationProp.inviteId.creator.petName }}
        </h5>
        <button class="btn btn-danger" @click="deleteInvitation">
          Decline
        </button> <button class="btn btn-success" @click="acceptInvitation">
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { invitationService } from '../services/InvitationService'
export default {
  name: 'Invitation',
  props: {
    invitationProp: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      invitations: computed(() => AppState.invitations),
      userProfile: computed(() => AppState.activeProfile)
    })
    return {
      state,
      deleteInvitation() {
        invitationService.delete(props.invitationProp.id, state.userProfile.id)
      },
      acceptInvitation() {
        invitationService.acceptInvitation(props.invitationProp.id, state.userProfile.id, props.invitationProp)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
