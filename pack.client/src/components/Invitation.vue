<template>
  <div class="Invitation">
    <div class="card col-4 m-2" style="width: 18rem;">
      <img class="card-img-top" :src="profileProp.img">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ profileProp.petName }}
        </h5>
        <button class="btn btn-danger" @click="deleteInvitation">
          Decline
        </button> <button class="btn btn-success">
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
    profileProp: { type: Object, required: true },
    invitationProp: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      invitations: computed(() => AppState.invitations),
      profileProp: computed(() => AppState.activeProfile)
    })
    return {
      state,
      deleteInvitation() {
        invitationService.delete(props.invitationProp.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
