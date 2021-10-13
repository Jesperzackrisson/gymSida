<template>

  <nav>
        <div class="navbar">
            <h1>Gympass & Kost</h1>
            <!-- <p>jag är {{ !loggedIn }}</p> -->
            <i @click="toggleNav" class="fas fa-bars" :class="{ 'icon-active': navToggle }"></i>
        </div>
        <transition name="slide">
          
          <ul v-show="navToggle" class="nav_list">
            <router-link to="/" class="nav_item">Hem</router-link>
            <router-link to="/about" class="nav_item">Gympass</router-link>
            <router-link to="#" class="nav_item">Kost</router-link>
            <!-- <li class="nav_item"><a href="/" class="nav_link">Hem</a></li>
            <li class="nav_item"><a href="/about" class="nav_link">Gympass</a></li>
            <li class="nav_item"><a href="#" class="nav_link">Kost</a></li> -->

            <!-- <li class="nav_item" v-show="userLoggedIn"><a href="#" class="nav_link">{{  }}</a></li> -->
            <!-- <hr class="navbar_hr"> -->
            <li class="nav_item" v-if="!loggedIn"  ><a href="/login" class="nav_link">Logga in </a></li>
            <div class="loggedInItems d-flex" v-else  >
              <router-link to="/profile" class="router_link"> {{ users.username }} </router-link>
              <router-link to="#" class="router_link">Inställningar</router-link>
              <li class="nav_item loginUser"><a href="#" class="nav_linkLoggedIn" @click="logout()">Logga ut </a></li>
              <!-- <router-link class="router_link" @click="logout()">Logga ut</router-link> -->
    
              <!-- <li class="nav_item"><a href="#" class="nav_linkLoggedIn">{{ users.username }}</a></li>
              <li class="nav_item"><a href="#" class="nav_linkLoggedIn">Inställningar</a></li>
              <li class="nav_item loginUser"><a href="#" class="nav_linkLoggedIn" @click="logout()">Logga ut </a></li> -->
            </div>
          </ul>
        </transition>
  </nav>

  <!-- {{ !userLoggedIn ? 'Logga in' : 'Logga ut' }} -->

  <!-- <header>
      <div class="logo">
          <h1 @click="goToHome()">Gympass & Kost</h1>
      </div>
      <button class="nav_toggle">
          <i class="fas fa-bars"></i>
      </button>
      <nav class="nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="#" class="nav_link">Hem</a></li>
            <li class="nav_item"><a href="#" class="nav_link">Gympass</a></li>
            <li class="nav_item"><a href="#" class="nav_link">Kost</a></li>
            <li class="nav_item"><a href="#" class="nav_link">Kontakt</a></li>
            <li class="nav_item"><a href="#" class="nav_link">Om oss</a></li>
        </ul>
      </nav>
  </header> -->



</template>

<script>
import  { auth } from '../../firebase'
import * as fb from '../../firebase'
import { mapState } from 'vuex'
export default {
data () {
  return {
    navToggle: null,
    auth,
    loggedIn: false
    
  }
},
computed: {
  ...mapState(['users'])
},
methods: {
  toggleNav() {
    this.navToggle = !this.navToggle;
  },
  logout() {
    this.$store.dispatch('logout');
  },

},
created() {
  fb.auth.onAuthStateChanged(user => {
    
    if (user) {
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }
  })
  

      
     
  
}









}
</script>

<style scoped>

.router_link {
  text-decoration: none;
  color: #1F4954;
  font-size: 2rem;
  font-weight: bold;
  padding-top: 2.3rem;
  margin-left: 2rem;
}
.router_link:hover {
  color: darkgray;
}




.nav_list {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  /* background-color: #1F4954; */
  background-color: #fff;
  /* background-color: #fff; */
  top: 0;
  right: 0;
  z-index: 1;
  padding-top: 20rem;
}

.nav_link {
  text-decoration: none;
  /* color: #F1F1F1; */
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
}
.nav_linkLoggedIn {
  text-decoration: none;
  /* color: #F1F1F1; */
  /* color: #333; */
  color: #1F4954;
  font-size: 2rem;
  font-weight: bold;
}
.navbar_hr {
  width: 15%;
  margin: 0 auto;
  margin-top: 1.5rem;
  border: 1px solid darkgray;
}
.nav_link:hover {
  color: darkgray;
}
.nav_linkLoggedIn:hover {
  color: darkgray;
}
.loggedInItems {
  border-top: 1px solid #1F4954;
  border-bottom: 1px solid #1F4954;
  border-width: 100%;
}
.loggedInItems {
  margin: 2rem auto;
  padding-bottom: 2rem;
}

.loggedInItems > li {
  margin-left: 2rem;
}
.loggedInItems > li:last-child {
  margin-right: 2rem;
}

.nav_item {
  list-style: none;
  text-align: center;
  padding-top: 2rem;
  text-decoration: none;
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
}
.nav_item:hover {
  color: darkgray;
}

.icon-active {
  transform: rotate(180deg);
}


/* Transition */
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}



.navbar {
    display: flex;
    justify-content: space-between;
    max-width: 70%;
    margin: auto;
    padding-top: 1.5rem;
}
.navbar > h1 {
    font-size: 2rem;
    color: #333;
    cursor: pointer;
}
.fa-bars {
    font-size: 2rem;
    color: #333;
    cursor: pointer;
    z-index: 1000;
    transition: 0.8s ease all;
}

@media screen and (max-width: 1440px) {

.nav_list {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  /* background-color: #1F4954; */
  background-color: #fff;
  top: 0;
  right: 0;
  z-index: 1;
  padding-top: 10rem;
}

.nav_link {
  text-decoration: none;
  /* color: #F1F1F1; */
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
}
.nav_link:hover {
  /* color: #333; */
  color: darkgray;
  /* color: #1F4954; */
}
.navbar_hr {
  width: 15%;
  margin: 0 auto;
  margin-top: 1.5rem;
  border: 1px solid darkgray;
}

.loggedInItems {
  margin: 0 auto;
}
.loggedInItems > li:last-child {
  margin-left: 3rem;
}

.loginUser > a {
  color: red;
}






}


</style>