<template>
  <div id="app">
    <div class="md-layout">
    <!-- <div id="nav">
      <h1>I am a...</h1>
      <router-link to="/user">User</router-link> |
      <router-link to="/counselor">Counselor</router-link>
    </div> -->
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.md-layout-item {
  height: 40px;
}
</style>

