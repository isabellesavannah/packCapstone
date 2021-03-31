<template>
  <div class="Invitation">
    <div class="card col-4 m-2" style="width: 18rem;">
      <img class="card-img-top" :src="profileProp.img">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ profileProp.petName }}
        </h5>
        <button class="btn btn-danger">
          Decline
        </button> <button class="btn btn-success">
          Accept
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from '@vue/reactivity'
// import { computed } from '@vue/runtime-core'
export default {
  name: 'Invitation',
  props: {
    profileProp: { type: Object, required: true }
  },
  setup() {
    // const state = reactive({
    //   invites: computed
    // })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
