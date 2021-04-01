<template>
  <div class="container-fluid">
    <div class="row background1 d-flex justify-content-center">
      <div class="col-12">
        <!-- start modal -->
        <div>
          <button type="button" class="btn btn-dark text-light" data-toggle="modal" data-target="#myModal">
            <i class="icon fas fa-dog fa-lg"><i class="fas fa-search"></i></i>
          </button>
        </div>
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

              <div class="modal-body form card">
                <form class="form card" @submit.prevent="filterProfiles">
                  <div class="form-group">
                    <label for="size">Dog's Weight</label>
                    <select class="form-control m-2" id="size" v-model="state.filterOptions.size" placeholder="lbs">
                      <option>5-20</option>
                      <option>20-45</option>
                      <option>45-65</option>
                      <option>65+</option>
                    </select>
                    <div class="form-group">
                      <label for="fixed">Is your dog neutered?</label>
                      <select class="form-control m-2" id="fixed" v-model="state.filterOptions.fixed">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="sex">Your dog's sex</label>
                      <select class="form-control m-2" id="sex" v-model="state.filterOptions.sex">
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="energy">What is your dog's energy?</label>
                      <select class="form-control m-2" id="energy" v-model="state.filterOptions.energy">
                        <option>High Energy</option>
                        <option>Medium Energy</option>
                        <option>Low Energy</option>
                      </select>
                    </div>
                    <button class="btn btn-secondary m-2" type="submit">
                      Go Fetch
                    </button>
                  </div>
                </form>
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
    <div class="row background1">
      <ProfilesComponent v-for="profile in state.filteredProfiles" :key="profile.id" :profile-prop="profile" />
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
      profiles: computed(() => AppState.profiles),
      filteredProfiles: AppState.profiles,
      filterOptions: {}
    })
    // onMounted(() => ProfileService.getAll())
    return {
      state,
      url,
      filterProfiles() {
        state.filteredProfiles = state.profiles
        const options = state.filterOptions
        state.filteredProfiles = state.filteredProfiles.filter(profile => {
          for (const key in options) {
            const option = options[key]
            debugger
            if (profile[key] !== option) {
              return false
            }
          }
          return true
        })
        state.filterOptions = {}
      }
    }
  }
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
width: -150px;
height: 100%;
-webkit-transform: translate3d(0%, 0, 0);
    -ms-transform: translate3d(0%, 0, 0);
    -o-transform: translate3d(0%, 0, 0);
       transform: translate3d(0%, 0, 0);
}

.modal.left .modal-content {
height: 100%;
width: 20em;
overflow-y: auto;
}

/* .modal.left .modal-body {
padding: 15px 15px 80px;
} */

/*Left*/
.modal.left.fade .modal-dialog{
left: -465px;
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

/* sticky button */
div.sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

</style>
