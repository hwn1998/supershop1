<template>
  <div id="app">
    <div>
      <router-link to="/login"><Login /></router-link>
      <router-view></router-view>
    </div>

    <div></div>
  </div>
</template>

<script>
import Login from './views/Login'
import Chaxun from './views/Chaxun'
import Home from './views/Home'
// import Chaxun from './views/chaxun.vue'

export default {
  name: 'App',
  components: {
    Chaxun,
    Login,
    Home,
  },
  methods: {},
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
}
</style>
