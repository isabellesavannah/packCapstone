<template>
  <div class="Invitation">
    <div class="card m-2 d-flex justify-content-center">
      <img class="card-img-top" :src="invitationProp.inviteId.creator.img">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ invitationProp.inviteId.creator.petName }}
        </h5>
        <button class="btn btn-danger" @click="deleteInvitation">
          Decline
        </button> <button class="float-right btn btn-success" @click="acceptInvitation">
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
      async deleteInvitation() {
        await invitationService.delete(props.invitationProp.id, state.userProfile.id)
      },
      async  acceptInvitation() {
        await invitationService.acceptInvitation(props.invitationProp.id, state.userProfile.id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  display: inline-block;
  padding: 8px;
  background: linear-gradient(130deg, #aa50e2, #ffa10a);
  object-fit: cover;
  margin: auto;
  border-radius: 50%;
  width: 150px;
  height:150px;
}
.transparent{
   background-color: rgba(255, 255, 255, 0.438);
}

.card{
  box-shadow: 2px 6px 8px 2px #aa50e2;
  transition: 0.3s ease-in-out;
  width: 100%;
  height: 85%;
}

.card:hover{
   box-shadow: 2px 8px 16px 2px aqua;
}

</style>
