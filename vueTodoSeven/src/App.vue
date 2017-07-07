<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}

.fixed {
  position: fixed;
}

.tc {
  text-align: center
}
</style>
