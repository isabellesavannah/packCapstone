<template>
  <div class="container-fluid">
    <div class="row background1 d-flex justify-content-center">
      <div class="col-12 stuff">
        <!-- start modal -->
        <div class="mt-3">
          <button type="button" class="btn btn-dark text-light border-wrap m-3" data-toggle="modal" data-target="#myModal">
            <i class="icon fas fa-search"></i>
          </button>
          <button class="btn btn-dark text-light border-wrap m-3" type="button" @click="resetFilters()">
            <i class="icon fas fa-dog fa-lg"></i>
          </button>
          <div>
          </div>
        </div>
        <!-- modal pop up -->
        <div class="modal left fade form-text" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog " role="document">
            <div class="modal-content ">
              <div class="modal-header fetch">
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="text-dark mr-1" aria-hidden="true">&times;</span>
                </button> -->
                <h4 class="modal-title" id="myModalLabel">
                  Find Your Pack
                </h4>
              </div>

              <div class="modal-body form fetch stuff">
                <form class="form card border-wrap " @submit.prevent="filterProfiles">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div class="form-group">
                    <label for="size">Dog's Weight</label>
                    <select class="form-control " id="size" v-model="state.filterOptions.size" placeholder="lbs">
                      <option>5-20</option>
                      <option>20-45</option>
                      <option>45-65</option>
                      <option>65+</option>
                    </select>
                    <div class="form-group">
                      <label for="fixed">Is Your Dog Neutered?</label>
                      <select class="form-control" id="fixed" v-model="state.filterOptions.fixed">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="sex">Your Dog's Gender</label>
                      <select class="form-control" id="sex" v-model="state.filterOptions.sex">
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="energy">What Is Your Dog's Energy?</label>
                      <select class="form-control" id="energy" v-model="state.filterOptions.energy">
                        <option>High Energy</option>
                        <option>Medium Energy</option>
                        <option>Low Energy</option>
                      </select>
                    </div>
                    <button class="btn btn-dark text-dark border-wrap m-3 close" type="submit" aria-label="Close">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
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
import $ from 'jquery'
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
        $('#myModal').modal('toggle')
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
.bg1{
  background-color: #1a1919a4;
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
 font-family: 'Righteous', cursive;
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
background: linear-gradient(#aa50e2, #000000);
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
