<template>
  <div>
      <navbar />
      <register-page />
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue'
import registerPage from '../components/Register/registerPage.vue'
export default {
  components: { 
    registerPage,
    Navbar,
  
  },

}
</script>

<style>

</style>