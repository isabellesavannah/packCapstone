<template>
  <div class="container-fluid">
    <div class="row background1 d-flex justify-content-center">
      <div class="col-12">
        <!-- start modal -->
        <button type="button" class="position-absolute btn btn-dark text-light" style="top: 3%; left: 3%" data-toggle="modal" data-target="#myModal">
          <i class="icon fas fa-dog fa-lg"><i class="fas fa-search"></i></i>
        </button>
        <!-- modal pop up -->
        <div class="modal left fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="text-danger mr-1" aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  Go Fetch
                </h4>
              </div>

              <div class="modal-body">
                <ul class="pb-2">
                  <li>Filter by Item 1</li>
                  <li>Filter by Item 2</li>
                  <li>Filter by Item 3</li>
                  <li>Filter by Item 4</li>
                  <li>Filter by Item 5</li>
                </ul>
              </div>
            </div><!-- modal-content -->
          </div><!-- modal-dialog -->
        </div><!-- modal -->
      </div><!-- container -->
      <!-- end modal -->
      <!-- start video -->
      <video class="video" autoplay>
        <source
          :src="url"
          type="video/mp4"
        />
      </video>
      <!-- end video -->
    </div>
    <!-- start profiles -->
    <div class="row">
      <!-- <div class="col"> -->
      <ProfilesComponent v-for="profile in state.profiles" :key="profile.id" :profile-prop="profile" />
    <!-- </div> -->
    </div>
    <!-- end profiles -->
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import ProfileComponent from '../components/ProfileComponent.vue'
// import ProfileService from '../services/ProfileService'
const url = require('../assets/C-Video.mp4')
export default {
  name: 'ProfilesPage',
  setup() {
    const state = reactive({
      profiles: computed(() => AppState.profiles)
    })
    // onMounted(() => ProfileService.getAll())
    return {
      state,
      url
    }
  }
  // components: { ProfileComponent }
}
</script>

<style>

.background1{
  background-color: black;
}

/* *{
  border: 1px dotted red;
} */
/* start modal */
/*******************************
* MODAL AS LEFT/RIGHT SIDEBAR
* Add "left" or "right" in modal parent div, after class="modal".
* Get free snippets on bootpen.com
*******************************/
.modal.left .modal-dialog {
margin: auto;
width: -250px;
height: 100%;
-webkit-transform: translate3d(0%, 0, 0);
    -ms-transform: translate3d(0%, 0, 0);
    -o-transform: translate3d(0%, 0, 0);
       transform: translate3d(0%, 0, 0);
}

.modal.left .modal-content {
height: 100%;
width: 40%;
overflow-y: auto;
}

/* .modal.left .modal-body {
padding: 15px 15px 80px;
} */

/*Left*/
.modal.left.fade .modal-dialog{
left: -250px;
-webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
    -o-transition: opacity 0.3s linear, left 0.3s ease-out;
           transition: opacity 0.3s linear, left 0.3s ease-out;
}

.modal.left.fade.in .modal-dialog{
left: 20;
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

.icon{
  color:rgb(107, 104, 104);
}
</style>
