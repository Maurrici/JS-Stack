<template>
  <div id="app" class="row justify-content-start align-items-center">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px 5%;
}
</style>
