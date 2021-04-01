<template>
  <div class="container demo">
    <div class="about text-center">
      <h1>{{ activeProfile.petName }}</h1>
      <img class="rounded" :src="activeProfile.img" alt="" />
      <p>{{ activeProfile.bio }}</p>
    </div>

    <button type="button" class="position-absolute btn btn-demo" style="top: 20%; right: 3%" data-toggle="modal" data-target="#myModal2">
      Invites
    </button>

    <!-- Modal -->
    <div class="modal right fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel2">
              Right Sidebar
            </h4>
          </div>

          <div class="modal-body">
            <span v-if="state.invitations.length">
              <Invitation v-for="invitation in state.filteredInvitations" :key="invitation._id" :invitation-prop="invitation" />
            </span>
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
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      invitations: computed(() => AppState.invitations),
      filteredInvitations: computed(() => AppState.invitations.filter(i => !i.accepted))
    })
    const route = useRoute()
    onMounted(() => profileService.getProfileById(route.params.id))
    onMounted(() => invitationService.getInvitationById(route.params.id))
    return {
      state,
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped>

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
right: 70px;
-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
-moz-transition: opacity 0.3s linear, right 0.3s ease-out;
-o-transition: opacity 0.3s linear, right 0.3s ease-out;
transition: opacity 0.3s linear, right 0.3s ease-out;
}

.modal.right.fade.in .modal-dialog {
right: 0;
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
  max-width: 100px;
}
</style>
