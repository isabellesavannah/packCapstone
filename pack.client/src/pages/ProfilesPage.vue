<template>
  <div class="container-fluid">
    <div class="row background1 d-flex justify-content-center">
      <div class="col-12 stuff">
        <!-- start modal -->
        <div class="mt-3">
          <button type="button" class="btn btn-dark text-light" data-toggle="modal" data-target="#myModal">
            <i class="icon fas fa-dog fa-lg"><i class="fas fa-search"></i></i>
          </button>
          <div>
            <button class="btn btn-dark mt-2" type="button" @click="resetFilters()">
              Retrieve Dogs
            </button>
          </div>
        </div>
        <!-- modal pop up -->
        <div class="modal left fade form-text" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog " role="document">
            <div class="modal-content">
              <div class="modal-header fetch">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="text-dark mr-1" aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  Go Fetch
                </h4>
              </div>

              <div class="modal-body form card fetch m-2 stuff">
                <form class="form card" @submit.prevent="filterProfiles">
                  <div class="form-group">
                    <label for="size">Dog's Weight</label>
                    <select class="form-control" id="size" v-model="state.filterOptions.size" placeholder="lbs">
                      <option>5-20</option>
                      <option>20-45</option>
                      <option>45-65</option>
                      <option>65+</option>
                    </select>
                    <div class="form-group">
                      <label for="fixed">Is your dog neutered?</label>
                      <select class="form-control" id="fixed" v-model="state.filterOptions.fixed">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="sex">Your dog's sex</label>
                      <select class="form-control" id="sex" v-model="state.filterOptions.sex">
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="energy">What is your dog's energy?</label>
                      <select class="form-control" id="energy" v-model="state.filterOptions.energy">
                        <option>High Energy</option>
                        <option>Medium Energy</option>
                        <option>Low Energy</option>
                      </select>
                    </div>
                    <button class="btn btn-info f-button m-2" type="submit">
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
      <video class="video" id="main-video" muted>
        <source
          :src="url"
          type="video/mp4"
        />
      </video>
      <!-- end video -->
    </div>
    <!-- start profiles -->
    <div class="row background1 justify-content-center">
      <ProfilesComponent v-for="profile in state.filteredProfiles" :key="profile.id" :profile-prop="profile" />
    </div>
    <!-- end profiles -->
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
// import { profileService } from '../services/ProfileService'
const url = require('../assets/C-Video.mp4')
export default {
  name: 'ProfilesPage',
  setup() {
    const state = reactive({
      profiles: computed(() => AppState.profiles),
      filteredProfiles: computed(() => AppState.profiles),
      filterOptions: {}
    })
    onMounted(() => {
      // profileService.getAll()
      document.getElementById('main-video').play()
    })
    return {
      state,
      url,
      filterProfiles() {
        state.filteredProfiles = state.profiles
        const options = state.filterOptions
        AppState.profiles = state.filteredProfiles.filter(profile => {
          for (const key in options) {
            const option = options[key]
            if (profile[key] !== option) {
              return false
            }
          }
          return true
        })
        state.filterOptions = {}
      },
      resetFilters() {
        profileService.getAll()
      }
    }
  }
}
</script>

<style>

.background1{
  background-color: #000000;
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
/* left: auto; */
-webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
    -o-transition: opacity 0.3s linear, left 0.3s ease-out;
           transition: opacity 0.3s linear, left 0.3s ease-out;
}

.modal.left.fade.in .modal-dialog{
/* left: auto; */
}
.modal-dialog{
margin-left: 0 !important;
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
.fetch{
background: linear-gradient(#aa50e2, #ffa10a);
background-color: black;
box-shadow: 0px, 6px, 8px, 0px black
}

.option:hover{
  color:#aa50e2
}

.f-button{
  color:white
}
.form-text{
  color: black
}

.stuff{
  color:black
}

</style>
