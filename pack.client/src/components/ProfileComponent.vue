<template>
  <div class="profilesComponent border-wrap col-3 m-4 ">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <img class="card-img-top pic" :src="profileProp.img" alt="">
    <div class="card-body">
      <h5 class="text-shadow card-title text-center text-dark">
        {{ profileProp.petName }}
        <hr>
        {{ profileProp.sex }}
      </h5>
      <p class="text-shadow card-text text-center text-dark">
        {{ profileProp.bio }}
      </p>
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

.border-wrap{
  text-decoration: none;
  transition: 0.2s;
  overflow: hidden;
}

.border-wrap:hover{
  color: #aa50e2;
  background: rgba(121, 252, 252, 0.76);
  box-shadow: 0 0 10px #aa50e2, 0 0 40px #aa50e2, 0 0 80px #aa50e2;
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
  text-shadow: 2px 2px, #aa50e2;
}
</style>
