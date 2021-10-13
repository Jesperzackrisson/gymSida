<template>
  <div>
      <navbar />
      <login-page />
  </div>
</template>

<script>
import loginPage from '../components/Login/loginPage.vue'
import Navbar from '../components/Navbar/Navbar.vue'
export default {
  components: { 
      loginPage,
      Navbar
},

}
</script>

<style>
 
</style>