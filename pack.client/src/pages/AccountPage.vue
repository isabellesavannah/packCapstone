<template>
  <div class="about text-center">
    <h1>Welcome {{ activeProfile.petName }}</h1>
    <img class="rounded" :src="activeProfile.img" alt="" />
    <p>{{ activeProfile.bio }}</p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    onMounted(() => profileService.getProfileById(route.params.id))
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
