<template>
  <div class="card acceptedIvitaion" style="width: 18rem;">
    <div class="card-body">
      <button>
        <div v-if="state.invitations.length">
          {{ acceptedInvitesProp.inviteId.creator.petName }}
          <img class="card-img-top" :src="acceptedInvitesProp.inviteId.creator.img">
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'AcceptedInvitation',
  props: {
    acceptedInvitesProp: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      invitations: computed(() => AppState.invitations)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
