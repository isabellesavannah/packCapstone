<template>
  <div class="container-fluid demo background1">
    <div class="card transparent about text-center justify-content-center mx-auto" style="max-width:30rem ">
      <img class="card-img-top" :src="activeProfile.img" alt="" />

      <h1>{{ activeProfile.petName }}</h1>
      <hr>
      <p><strong>Energy Level: {{ activeProfile.energy }}</strong></p>
      <br>
      <p><strong>Gender: {{ activeProfile.sex }}</strong></p>
      <br>
      <h5>{{ activeProfile.bio }}</h5>
      <hr>
      <p><strong>Fixed: {{ activeProfile.fixed }} </strong></p>
      <p><strong>Size: {{ activeProfile.size }}</strong></p>
      <button class="btn btn-dark invite-button"
              v-if="state.account.id !== activeProfile.creatorId"
              @click="createInvite"
      >
        <i class="fas fa-comments fa-lg color-light"></i>
      </button>
    </div>

    <button type="button"
            class="position-absolute btn btn-demo text-light"
            style="top: 20%; right: 3%"
            data-toggle="modal"
            data-target="#myModal2"
            v-if="state.account.id == activeProfile.creatorId"
    >
      Invites
    </button>
    <!-- INVITE BUTTON -->
    <!-- <button class="btn btn-dark"
            v-if="state.account.id !== activeProfile.creatorId"
            @click="createInvite"
    >
      <i class="fas fa-comments fa-lg"></i>
    </button> -->

    <button type="button"
            class="position-absolute btn btn-demo text-light"
            style="top: 20%; left: 3%"
            data-toggle="modal"
            data-target="#myModal2C"
            v-if="state.account.id == activeProfile.creatorId"
    >
      Chats
    </button>

    <!-- Modal -->
    <div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content fetch">
          <div class="modal-header fetch">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel2">
            </h4>
          </div>

          <div class="modal-body">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span v-if="state.invitations.length">
              <Invitation v-for="invitation in state.filteredInvitations" :key="invitation._id" :invitation-prop="invitation" />
            </span>
          </div>
        </div><!-- modal-content -->
      </div><!-- modal-dialog -->
    </div><!-- modal -->
    <div class="modal right fade" id="myModal2C" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2C">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel2C">
            </h4>
          </div>

          <div class="modal-body">
            <AcceptedInvitation v-for="invitation in state.acceptedInvitations" :key="invitation.id" :accepted-invites-prop="invitation">
            </AcceptedInvitation>
          </div>
        </div><!-- modal-content -->
      </div><!-- modal-dialog -->
    </div><!-- modal -->
  </div><!-- container -->
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
import { invitationService } from '../services/InvitationService'
import { chatsService } from '../services/ChatsService'
import { inviteService } from '../services/InviteService'
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      invitations: computed(() => AppState.invitations),
      filteredInvitations: computed(() => AppState.invitations.filter(i => !i.accepted)),
      acceptedInvitations: computed(() => AppState.invitations.filter(i => i.accepted)),
      chat: computed(() => AppState.chats),
      invites: computed(() => AppState.invites),
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    })
    const route = useRoute()
    onMounted(async() => {
      await profileService.getProfileById(route.params.id)
      await invitationService.getInvitationById(route.params.id)

      await inviteService.getInvitesByProfileId(route.params.id)
      await state.invites.forEach(i => chatsService.getAllChatsById(i.id))
    })

    return {
      state,
      activeProfile: computed(() => AppState.activeProfile),
      async createInvite() {
        await inviteService.createInvite({ accepted: false, to: state.activeProfile.id, from: '', creatorId: '' })
      }
    }
  }
}
</script>

<style scoped>

.fetch{
background: linear-gradient(#aa50e2, #000000);
background-color: black;
box-shadow: 0px, 6px, 8px, 0px black
}

.background1{
  background-color: black;
}
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
  width: 65%;
  height: auto;
}

.card:hover{
   box-shadow: 2px 8px 16px 2px aqua;
}

.modal.right .modal-dialog {
position: fixed;
margin: auto;
width: 320px;
height: 100%;
-webkit-transform: translate3d(0%, 0, 0);
-ms-transform: translate3d(0%, 0, 0);
-o-transform: translate3d(0%, 0, 0);
transform: translate3d(0%, 0, 0);
}

.modal.right .modal-content {
height: 100%;
width: 320px;
overflow-y: auto;
}

.modal.right .modal-body {
padding: 15px 15px 80px;
}

/*Right*/
.modal.right.fade .modal-dialog {
margin-right: 0 !important;
-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
-moz-transition: opacity 0.3s linear, right 0.3s ease-out;
-o-transition: opacity 0.3s linear, right 0.3s ease-out;
transition: opacity 0.3s linear, right 0.3s ease-out;
}

.modal.right.fade.in .modal-dialog {
/* right: 0; */
}

/* ----- MODAL STYLE ----- */
.modal-content {
border-radius: 0;
border: none;
}

.modal-header {
border-bottom-color: #EEEEEE;
background-color: #FAFAFA;
}

/* ----- v CAN BE DELETED v ----- */
body {
background-color: #78909C;
}

.demo {
padding-top: 60px;
padding-bottom: 110px;
}

.btn-demo {
margin: 15px;
padding: 10px 15px;
border-radius: 0;
font-size: 16px;
background-color:deeppink;
}

.btn-demo:focus {
outline: 0;
}
img {
  max-width:30rem;
  max-height: 77%;
  object-fit: cover;
}

.invites{
  height: 10%;
  width: 30%
}

.invite-button{
  width: 20%;
  margin-left: 5px;
  margin-bottom: 5px;
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
</style>
