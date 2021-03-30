<template>
  <div class="container-fluid">
    <div class="row background1">
      <div class="col-12 d-flex justify-content-center">
        <video class="video" autoplay>
          <source
            :src="url"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>Dog Profiles go Here =></h1>
      </div>
    </div>
  </div>
</template>

<script>
const url = require('../assets/C-Video.mp4')
export default {
  name: 'ProfilesPage',
  setup() {
    return {
      url
    }
  },
  components: {}
}
</script>

<style>

.background1{
  background-color: black;
}

/* *{
  border: 1px dotted red;
} */
</style>
