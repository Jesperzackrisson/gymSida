<template>
  <div class="cards d-flex">
      <div class="gympass">
        <div class="gympass-content">
            <h1>Ditt Gympass</h1>
            <hr>
            <!-- <p>Skapa ditt gympass, precis som just du vill ha det. Lägg till måndagens bröst och ryggpass eller varför inte ett benpass. Det är upp till dig hur du vill lägga upp veckan!</p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui at quisquam quod, ut rem laboriosam quibusdam, fuga iste nisi, cum nihil placeat labore deserunt ducimus quam molestiae illum cupiditate.</p>
            <button @click="$router.push('about')">Gå vidare</button>
        </div>
      </div>
      <div class="vl"></div>
      <div class="kost">
        <div class="kost-content">
            <h1>Din dagliga kost</h1>
            <hr>
            <!-- <p>För att man ska kunna nå sina mål kan det vara helt avgörande att äta rätt i samband med träning. Håll därför koll på vad du äter, och planera gärna hur och vad du ska äta under en gymvecka!  </p> -->
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, odio earum? Delectus aliquid, perferendis quam ullam repellat voluptas nihil. Sunt quo, est adipisci placeat iste eius voluptas incidunt facere obcaecati!</p>
            <button>Gå vidare</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gympass {
    /* border: 1px solid #333; */
    width: 48%;
    /* height: 91.4vh; */
    /* height: 100vh; */
    /* background: lightgoldenrodyellow; */
    /* cursor: pointer; */
}
.gympass-content {
    text-align: center;
    margin-top: 15rem;
    color: #333;
}
.gympass-content > h1 {
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-size: 4rem;
}
.gympass-content > hr {
    width: 15%;
    margin: auto;
    margin-top: .5rem;
}
.gympass-content > p {
    width: 60%;
    margin: 1rem auto;
    font-family: 'Courier New', Courier, monospace;
}
.gympass-content > button {
    width: 90px;
    height: 30px;
    border: none;
    background-color: #333;
    color: #F1F1F1;
    border-radius: 3px;
    cursor: pointer;
}


.kost {
    /* border: 1px solid #333; */
    width: 48%;
    height: 91.3vh;
    /* background: lightskyblue; */
    /* cursor: pointer; */
}
.kost-content {
    text-align: center;
    margin-top: 15rem;
    color: #333;
}
.kost-content > h1 {
    font-family: 'Big Shoulders Stencil Display', cursive;
    font-size: 4rem;
}
.kost-content > hr {
    width: 15%;
    margin: auto;
    margin-top: .5rem;
}
.kost-content > p {
    width: 60%;
    margin: 1rem auto;
    font-family: 'Courier New', Courier, monospace;
}
.kost-content > button {
    width: 90px;
    height: 30px;
    border: none;
    background-color: #333;
    color: #F1F1F1;
    border-radius: 3px;
    cursor: pointer;
}

.vl {
    border-left: 3px solid #333;
    height: 50vh;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cards {
    justify-content: space-between;
    position: relative;
    height: 70vh;
}

@media screen and (max-width: 1440px) {
    .gympass-content {
        margin-top: 12rem;
    }
    .kost-content {
        margin-top: 12rem;
    }
    .vl {
        border-left: 3px solid #333;
        height: 50vh;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
    }







}
</style>