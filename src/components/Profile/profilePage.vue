<template>
  <div class="profilePage">
      <h1>Din Profil</h1>
      <div class="profile">
          <img src="../../assets/user.png" alt="User Profile" class="userProfile">
          <h1>{{ users.firstName }} {{ users.lastName }}</h1>
          <h5>{{ users.email }}</h5>
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['users'])
    }
}
</script>

<style scoped>
.profilePage {
    height: 94.3vh;
}
.profilePage > h1 {
    text-align: center;
    color: #333;
}
.profile {
    text-align: center;
    border: 1px solid #333;
    width: 600px;
    height: 600px;
    margin: 5rem auto;
    padding-top: 2rem;
    
}
.profile > h1 {
    color: #1F4954;
    margin-top: 2rem;
}





</style>