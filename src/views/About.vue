<template>
  <div class="about">
    <navbar />
    <gympass />
  </div>
</template>



<script>
import Gympass from '../components/Gympass/Gympass.vue'
import Navbar from '../components/Navbar/Navbar'

export default {
  components: {
    Navbar,
    Gympass
  }
}
</script>

<style scoped>
.about {
  height: 100vh;
  width: 1920px;
  margin: auto;
}

@media screen and (max-width: 1440px) {
  .about {
    /* height: 718px; */
    width: 1440px;
    margin: auto;
  }
}

</style>
