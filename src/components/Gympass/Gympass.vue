<template>
  <div>
      <h1>{{ users.firstName}}, skappa ditt egna gympass</h1>
      <div class="gympass-form">

          <div>
             <i class="fas fa-calendar-alt"></i>
             <input type="date" class="input_date" v-model="exercise.date">
          </div>
          <div>
             <!-- <i class="fas fa-dumbbell"></i> -->
             <i class="fas fa-child"></i>
             <input type="text" placeholder="Muskelgrupp" class="input_muscle" v-model="exercise.muscle">
          </div>
          <div>
              <i class="fas fa-map-marker-alt"></i>
              <input type="text" placeholder="Plats" class="input_location" v-model="exercise.location">
          </div>
          <div class="inputs_time d-flex">
              <div class="time_start">
                <i class="fas fa-hourglass-start"></i>
                <input type="time" class="input_time" v-model="exercise.startTime">
              </div>
              <div class="time_end">
                  <i class="fas fa-hourglass-end"></i>
                <input type="time" class="input_time" v-model="exercise.endTime">
              </div>
          </div>
          <div class="sendBtn">
              <button 
                @click="createExercise()" 
                :disabled="exercise.date === '' || exercise.muscle === '' || exercise.location === '' || exercise.startTime === '' || exercise.endTime === ''">
                Skicka
                </button>
          </div>
          



          
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            exercise: {
                date: '',
                muscle: '',
                location: '',
                startTime: '',
                endTime: ''
            }
        }
    },
    methods: {
        createExercise() {
            this.$store.dispatch('createExercise', {
                date: this.exercise.date,
                muscle: this.exercise.muscle,
                location: this.exercise.location,
                startTime: this.exercise.startTime,
                endTime: this.exercise.endTime
            })
            this.exercise.date = '';
            this.exercise.muscle = '';
            this.exercise.location = '';
            this.exercise.startTime = '';
            this.exercise.endTime = '';
        }
    },
    computed: {
        ...mapState(['users'])
    }





}
</script>

<style scoped>

h1 {
    text-align: center;
    color: #333;
    padding-top: 5rem;
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-size: 4rem;
}

.gympass-form {
    text-align: center;
    padding-top: 8rem;
}

.input_date {
    width: 400px;
    height: 60px;
    background-color: #f1f1f1;
    /* border: 1px solid #333; */
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
}
.input_muscle {
    width: 400px;
    height: 60px;
    background-color: #f1f1f1;
    /* border: 1px solid #333; */
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    margin-top: 3rem;
    margin-left: 1rem;
}
.input_location {
    width: 400px;
    height: 60px;
    background-color: #f1f1f1;
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    margin-top: 3rem;
    /* margin-left: 1rem; */
}
.input_time {
    width: 164px;
    height: 60px;
    background-color: #f1f1f1;
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    margin-top: 3rem;
}
.inputs_time {
    text-align: center;
    width: 100%;
    margin: 0 auto;
}
.time_start {
    margin-left: 46.3rem;
}
.time_end {
    margin-left: 2rem;
}


.fa-child,
.fa-hourglass-end,
.fa-hourglass-start,
.fa-map-marker-alt,
.fa-calendar-alt {
    font-size: 2rem;
}
.fa-map-marker-alt,
.fa-hourglass-end,
.fa-hourglass-start {
    margin-right: 1rem;
}

.sendBtn {
    margin-top: 3rem;
}
.sendBtn > button {
    width: 130px;
    height: 30px;
    border: none;
    background-color: #333;
    color: #f1f1f1;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
}





/* TA BORT */

.gympass {
    justify-content: space-between;
    width: 70%;
    margin: 5rem auto;
}
.gympass-output {
    width: 800px;
    height: 800px;
    position: relative;
    margin-top: 5rem;
}

.checkbox {
    display: inline-flex;
    cursor: pointer;
    position: relative;
}
.checkbox > span {
    padding: 0 1rem;
    font-size: 1.2rem;
}
.checkbox > input:checked + span::before {
    content: '\2713';
    display: block;
    text-align: center;
    color: #f1f1f1;
    font-size: 1rem;
    position: absolute;
    left: .3rem;
    
}
.checkbox > input {
    height: 20px;
    width: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: #ffffff;
    border: 1px solid #333;
}
.checkbox > input:checked {
    background-color: #333;
}
.head {
    font-size: 1.3rem;
    font-family: 'Big Shoulders Stencil Display', cursive;
    margin-bottom: 1rem;
}
.btn {
    width: 90px;
    height: 40px;
    border: none;
    background-color: #333;
    color: #f1f1f1;
    border-radius: 5px;
    cursor: pointer;
}

.table {
    border-collapse: collapse;
    margin: 0rem auto;
    font-size: 0.9em;
    font-family: 'Courier New', Courier, monospace;
    min-width: 700px;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
}
.table thead tr {
    background-color: #333;
    color: #f1f1f1;
    text-align: left;
}
.table th, .table td {
    padding: 1rem .5rem;
}
.table tbody tr {
    border-bottom: 1px solid #333;
}
.btn-add {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -35%);
}






@media screen and (max-width: 1440px) {
    
    
    
    
    h1 {
    text-align: center;
    color: #333;
    padding-top: 5rem;
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-size: 3rem;
}

.gympass-form {
    text-align: center;
    padding-top: 3rem;
}

.input_date {
    width: 400px;
    height: 60px;
    background-color: #f1f1f1;
    /* border: 1px solid #333; */
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
}
.input_muscle {
    width: 400px;
    height: 60px;
    background-color: #f1f1f1;
    /* border: 1px solid #333; */
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    margin-top: 3rem;
    margin-left: 1rem;
}
.input_location {
    width: 400px;
    height: 60px;
    background-color: #f1f1f1;
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    margin-top: 3rem;
    /* margin-left: 1rem; */
}
.input_time {
    width: 164px;
    height: 60px;
    background-color: #f1f1f1;
    border: none;
    border-bottom: 1px solid #333;
    padding-left: 1rem;
    margin-top: 3rem;
}
.inputs_time {
    text-align: center;
    width: 100%;
    margin: 0 auto;
}
.time_start {
    margin-left: 31.3rem;
}
.time_end {
    margin-left: 2rem;
}


.fa-child,
.fa-hourglass-end,
.fa-hourglass-start,
.fa-map-marker-alt,
.fa-calendar-alt {
    font-size: 2rem;
}
.fa-map-marker-alt,
.fa-hourglass-end,
.fa-hourglass-start {
    margin-right: 1rem;
}

.sendBtn {
    margin-top: 3rem;
}
.sendBtn > button {
    width: 130px;
    height: 30px;
    border: none;
    background-color: #333;
    color: #f1f1f1;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
}






}
</style>