<template>
  <div class="profilesComponent">
    <div class="card col-4 m-2" style="width: 18rem;">
      <img class="card-img-top" :src="profileProp.img">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ profileProp.petName }}
          <hr>
          {{ profileProp.sex }}
        </h5>
        <p class="card-text text-center">
          {{ profileProp.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilesComponent',
  props: {
    profileProp: { type: Object, required: true }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
