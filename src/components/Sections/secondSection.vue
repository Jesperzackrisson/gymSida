<template>
  <div class="secondSection">
      <div v-if="exercises.length">
        <div v-for="exercise in exercises" :key="exercise.id" class="exercise">
          <div class="output">
            
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['users', 'exercises'])
  }
}
</script>

<style scoped>

.secondSection {
  background-color: #333;
  height: 100vh;
}

.secondSection > p {
  color: #f1f1f1;
  text-align: center;
}




</style>