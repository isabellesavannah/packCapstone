<template>
  <div class="profilesComponent col-4 d-flex justify-content-center">
    <div class="card m-5 transparent" style="width: 18rem;">
      <img class="card-img-top pic" :src="profileProp.img" alt="">
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
  background: linear-gradient(130deg, #aa50e2, #ffa10a);
  object-fit: cover;
  margin: auto;
  border-radius: 50%;
  width: 150px;
  height:150px;
}
.transparent{
   background-color: rgba(255, 255, 255, 0.438);
}

.card{
  box-shadow: 2px 6px 8px 2px #aa50e2;
  transition: 0.3s ease-in-out;
  width: 65%;
  height: 85%;
}

.card:hover{
   box-shadow: 2px 8px 16px 2px aqua;
}
</style>
