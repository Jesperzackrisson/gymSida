<template>
  <div class="home">
    <navbar />
    <home-page />
    <first-section />
    <second-section />
  </div>
  
</template>

<script>
import HomePage from '../components/Home/homePage.vue'
import Navbar from '../components/Navbar/Navbar.vue'
import FirstSection from '../components/Sections/firstSection.vue'
import SecondSection from '../components/Sections/secondSection.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HomePage,
    FirstSection,
    SecondSection
    
  }
}
</script>

<style scoped>
.home {
  /* background-image: url('../assets/background-images/homeBackgroundImage.jpg'); */
  /* background-image: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1), url('../assets/background-images/homeBackgroundImage.jpg')); */
  /* background-repeat: no-repeat; */
  width: 1920px;
  height: 100vh;
  margin: auto;
  /* background-color: #F1F1F1; */
  /* background: black; */
  overflow-x: hidden;
}

@media screen and (max-width: 1440px) {
  .home {
    width: 1440px;
    /* height: 718px; */
    margin: auto;
    background: #f1f1f1;
  }
}

/* @media screen and (min-width: 1920px) {
  .home {
    background: red;
  }
} */
</style>