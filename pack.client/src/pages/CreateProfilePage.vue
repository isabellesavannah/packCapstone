<template>
  <div class="createProfile flex-grow-1 d-flex">
    <div class="container">
      <div class="col-12">
        <div class="row d-flex justify-content-center">
          <form class="form-inline card" style="width: 40rem" @submit.prevent="createProfile">
            <input
              type="text"
              name="petName"
              id="petName"
              class="form-control m-2"
              placeholder="Your Dogs Name"
              aria-describedby="helpId"
              v-model="state.newProfile.petName"
            />
            <input
              type="img"
              name="img"
              id="img"
              class="form-control m-2"
              placeholder="Drop a pic of your dog"
              aria-describedby="helpId"
              v-model="state.newProfile.img"
            />
            <textarea
              type="text"
              name="bio"
              rows="4"
              id="bio"
              class="form-control m-2"
              placeholder="Tell us about your pup"
              aria-describedby="helpId"
              v-model="state.newProfile.bio"
            ></textarea>
            <div class="form-group">
              <label for="size">Dog's Weight</label>
              <select class="form-control m-2" id="size" v-model="state.newProfile.size" placeholder="lbs">
                <option>5-20</option>
                <option>20-45</option>
                <option>45-65</option>
                <option>65+</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fixed">Is your dog neutered?</label>
              <select class="form-control m-2" id="fixed" v-model="state.newProfile.fixed">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div class="form-group">
              <label for="sex">Your dog's sex</label>
              <select class="form-control m-2" id="sex" v-model="state.newProfile.sex">
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
            <div class="form-group">
              <label for="energy">What is your dog's energy?</label>
              <select class="form-control m-2" id="energy" v-model="state.newProfile.energy">
                <option>High Energy</option>
                <option>Medium Energy</option>
                <option>Low Energy</option>
              </select>
            </div>
            <button class="btn btn-secondary m-2" type="submit">
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import { profileService } from '../services/ProfileService'
import router from '../router'
export default {
  name: 'CreateProfile',
  setup() {
    const state = reactive({
      newProfile: {}
    })
    return {
      state,
      async createProfile() {
        try {
          const createdProfile = await profileService.createProfile(state.newProfile)
          state.newProfile = {}
          router.push({ name: 'Account', params: { id: createdProfile._id } })
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
