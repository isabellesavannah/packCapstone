<template>
  <div class="Invitation">
    <div class="card m-2 d-flex justify-content-center border-wrap text-shadow">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img class="card-img-top" :src="invitationProp.inviteId.creator.img">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ invitationProp.inviteId.creator.petName }}
        </h5>
        <button class="btn btn-dark text-light border-wrap m-3" @click="deleteInvitation">
          Decline
        </button> <button class="btn btn-dark text-light border-wrap m-3" @click="acceptInvitation">
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

.text-shadow{
  text-shadow:8px 8px, #aa50e2;
  font-family: 'Righteous', cursive;
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

.border-wrap{
  text-decoration: none;
  transition: 0.2s;
  overflow: hidden;
}

.border-wrap:hover{
  color: #aa50e2;
  background: rgba(0, 255, 255, 0.63);
  box-shadow: 0 0 10px aqua, 0 0 40px rgba(121, 252, 252, 0.76), 0 0 80px aqua;
  transition-delay: 1s;

}
.border-wrap span{
  position: absolute;
  display: block;
}
.border-wrap span:nth-child(1){
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#aa50e2);
}
.border-wrap:hover span:nth-child(1){
  left: 100%;
  transition: 1s;
}
.border-wrap span:nth-child(3){
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg,transparent,#aa50e2);
}
.border-wrap:hover span:nth-child(3){
  right: 100%;
  transition: 1s;
  transition-delay: 0.5s;

}
.border-wrap span:nth-child(2){
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,transparent,#aa50e2);
}
.border-wrap:hover span:nth-child(2){
  top: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.border-wrap span:nth-child(4){
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg,transparent,#aa50e2);
}
.border-wrap:hover span:nth-child(4){
  bottom: 100%;
  transition: 1s;
  transition-delay: 0.75s;
}

// start
.b-w{
  text-decoration: none;
  transition: 0.2s;
  overflow: hidden;
}

.b-w:hover{
  color: #00ffff;
  background: #00ffffa1;
  box-shadow: 0 0 10px #aa50e2, 0 0 40px #00ffff, 0 0 80px #00ffff;
  transition-delay: 1s;

}
.b-w span{
  position: absolute;
  display: block;
}
.b-w span:nth-child(1){
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#aa50e2);
}
.b-w:hover span:nth-child(1){
  left: 100%;
  transition: 1s;
}
.b-w span:nth-child(3){
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg,transparent,#aa50e2);
}
.b-w:hover span:nth-child(3){
  right: 100%;
  transition: 1s;
  transition-delay: 0.5s;

}
.b-w span:nth-child(2){
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,transparent,#aa50e2);
}
.b-w:hover span:nth-child(2){
  top: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.b-w span:nth-child(4){
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg,transparent,#aa50e2);
}
.b-w:hover span:nth-child(4){
  bottom: 100%;
  transition: 1s;
  transition-delay: 0.75s;
}
</style>
