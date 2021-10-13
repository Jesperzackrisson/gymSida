<template>
  <div class="section">

    <div class="grid">
      <div>        
        <img src="../.././assets/gymPic1.jpg" alt="" class="gymPic_1">
      </div>
      <div class="card gymAndKost">        
        <h1><span class="gymFirst">Muskel</span> + <span class="kostFirst">Näring</span> = <span class="gymFirst">Perfekt</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis nam ex at impedit iure quasi, quae ipsum temporibus necessitatibus voluptates soluta vero sit hic libero corrupti officia saepe. Unde commodi debitis possimus necessitatibus est. Error modi non quisquam iure, adipisci est! Officiis maxime omnis, quasi totam porro quae illum.</p>
      </div>
      <div>        
        <img src="../.././assets/proteinPic1.jpg" alt="" class="gymPic_1">
      </div>
      <div class="card gym">        
        <h1><span class="gymFirst">Muskel</span>byggnad</h1>
        <p>Starka och definerade muskler är någonting som många ambitiösa motionärer och elitidrottare strävar efter. Om det är ditt mål, så är det muskeluppbyggnad som bör ligga i fokus i din träning. Men hur bygger man muskler effektivt? Vad behöver man tänka på?</p>
        <button class="readMore">Läs mer</button>
      </div>
      <div>        
        <img src="../.././assets/gymPic2.jpg" alt="" class="gymPic_1">
      </div>
      <div class="card kost">        
        <h1><span class="kostFirst">Näring</span>sintag</h1>
        <p>Att muskelträna är alltså nödvändigt för att bygga upp muskler men din diet måste också anpassas för att uppnå framgångsrik träning. För alla muskelbyggare så är det nödvändigt att inta en stor mängd protein. Magert kött, ost med låg fetthalt och tonfisk innehåller mängder av protein och endast lite fett.</p>
        <button class="readMore">Läs mer</button>
      </div>
    </div>






      <!-- <div v-if="exercises.length">
        <div v-for="exercise in exercises" :key="exercise.id" class="exercise">
          <div class="output">
            <i class="fas fa-times-circle"></i>
            <h2>{{ exercise.username }}</h2>
            <h3>{{ exercise.date }}</h3>
            <h3>{{ exercise.muscle }}</h3>
            <h3>{{ exercise.location }}</h3>
            <h3>{{ exercise.startTime }}</h3>
            <h3>{{ exercise.endTime }}</h3>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Det finns tyvärr inga gympass upplagda!</p>
      </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {

    }
  },
  
  computed: {
    ...mapState(['users', 'exercises'])
  },



}
</script>

<style scoped>
.section {
  width: 1920px;
  /* height: 60vh; */
  margin-top: 3.5rem;
  background-color: #333;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.gymPic_1 {
  width: 100%;
  filter: opacity(0.6);
}
.card {
  background-color: #fff;
}
.readMore {
  padding: .5rem 1.5rem;
  font-size: 1rem;
  border: none;
  background-color: #333;
  color: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
}
.gym,
.kost,
.gymAndKost {
  text-align: center;
  padding-top: 5rem;
}
.gym > h1,
.kost > h1,
.gymAndKost > h1 {
  font-family: 'Big Shoulders Stencil Display', cursive;
}

.gym > p,
.kost > p,
.gymAndKost > p {
  font-family: 'Courier New', Courier, monospace;
  width: 80%;
  margin: 1.5rem auto;
}

.gymFirst,
.kostFirst {
  color: #1F4954;
}








@media screen and (max-width: 1440px) {
  .section {
    width: 1440px;
    height: 100vh;
    background: #f1f1f1;
  }
  .gymPic_1 {
    width: 100%;
    height: 100%;
    filter: opacity(0.6);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-top: 9.2rem;
  }
  .gym,
  .kost,
  .gymAndKost {
    text-align: center;
    padding-top: 2rem;
  }
  .gym > p,
  .kost > p,
  .gymAndKost > p {
    font-family: 'Courier New', Courier, monospace;
    width: 90%;
    margin: 1.5rem auto;
  }



}




</style>