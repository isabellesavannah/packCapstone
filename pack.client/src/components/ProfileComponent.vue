<template>
  <div class="rounded profilesComponent border-wrap col-3 m-4">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <router-link class="nounderline" :to="{name:'Account', params:{id:profileProp.id}}">
      <h2 class="text-shadow card-title text-center text-light mt-4">
        {{ profileProp.petName }}
      </h2>
      <img class="card-img-center mt-3 pic d-flex justify-content-center" :src="profileProp.img" alt="">
      <div class="card-body nounderline">
      </div>
    </router-link>
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
  // background: linear-gradient(130deg, #aa50e2, #ffa10a);
  background: linear-gradient(130deg, rgb(2, 223, 149), rgb(233, 65, 233));
  object-fit: cover;
  margin: auto;
  border-radius: 50%;
  width: 200px;
  height:200px;
  box-shadow: 6px,6px,12px,16px black;
}
// .transparent{
//    background-color: rgba(255, 255, 255, 0.438);
// }

// .card{
//   box-shadow: 2px 6px 8px 2px #aa50e2;
//   transition: 0.3s ease-in-out;
//   width: 65%;
//   height: 85%;
// }

// .card:hover{
//    box-shadow: 2px 8px 16px 2px aqua;
// }
.nounderline{
  text-decoration: none !important;
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

.text-shadow{
  text-shadow:8px 8px, #aa50e2;
  font-family: 'Righteous', cursive;
}

.rounded{
  border-radius: 50%;
  font-family: 'Righteous', cursive;
}
</style>
