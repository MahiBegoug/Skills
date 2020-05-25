<template>
  <div id="app">
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->

<!--    <router-view></router-view>-->
    <Skills />
  </div>
</template>

<script>

import Skills from "@/components/Skills";
export default {
  name: 'app',
  components: {Skills},
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body {
    background-color: #EEEEEE;
    font-family: 'Montserrat',sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
  body, html {
    margin: 0;
    height: 100%;
  }
  #app {
    width: 50%;
  }
</style>
