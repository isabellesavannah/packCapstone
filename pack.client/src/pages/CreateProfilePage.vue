<template>
  <div class="createProfile flex-grow-1 d-flex flex-column align-items-center">
    <div class="container">
      <div class="row">
        <form class="form-inline" @submit.prevent="CreateProfile()">
          <input
            type="text"
            name="petName"
            id="petName"
            class="form-control"
            placeholder="Your Dogs Name"
            aria-describedby="helpId"
            v-model="state.newProfile.petName"
          />
          <input
            type="img"
            name="img"
            id="img"
            class="form-control"
            placeholder="Drop a pic of your dog/dogs"
            aria-describedby="helpId"
            v-model="state.newProfile.img"
          />
          <input
            type="text"
            name="bio"
            id="bio"
            class="form-control"
            placeholder="Tell us about your pup"
            aria-describedby="helpId"
            v-model="state.newProfile.bio"
          />
          <div class="form-group">
            <label for="size">Dogs Size</label>
            <select class="form-control" id="size">
              <option>5lbs-20lbs</option>
              <option>20lbs-45lbs</option>
              <option>45lbs-65lbs</option>
              <option>65+</option>
            </select>
          </div>
          <div class="form-group">
            <label for="fixed">Is your dog neutered?</label>
            <select class="form-control" id="fixed">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div class="form-group">
            <label for="sex">Your dogs sex?</label>
            <select class="form-control" id="sex">
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div class="form-group">
            <label for="energy">What is your dogs energy?</label>
            <select class="form-control" id="energy">
              <option>High Energy</option>
              <option>Medium Energy</option>
              <option>Low Energy</option>
            </select>
          </div>
          <button class="btn btn-secondary" type="submit">
            Create Board
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import { profileService } from '../services/CreateProfileService'
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
          await profileService.createProfile(state.newProfile)
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
