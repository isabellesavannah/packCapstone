<template>
  <div class="profilesComponent col-4">
    <div class="card m-2" style="width: 18rem;">
      <img class="card-img-top pic" :src="profileProp.img">
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

.pic{
  display: inline-block;
  padding: 8px;
  background: linear-gradient(130deg, #74b9ff, #e66767);
  object-fit: cover;
  margin: auto;
  border-radius: 50%;
  width: 200px;
  height:200px;
}
</style>
