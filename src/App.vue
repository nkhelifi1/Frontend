<template>
  <navbar></navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/NavBar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #004aad;
}

nav a.router-link-exact-active {
  color: #004aad;
}
</style>
