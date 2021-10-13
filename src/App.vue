<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.d-flex {
  display: flex;
}
@media screen and (min-width: 1440px) {
  #app {
    background: #f1f1f1;
  }
}
</style>
