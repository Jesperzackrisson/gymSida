<template>
  <div>
      <navbar />
      <profile-page />
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue'
import ProfilePage from '../components/Profile/profilePage.vue'
export default {
    components: {
        Navbar,
        ProfilePage,
    }
}
</script>

<style>


</style>