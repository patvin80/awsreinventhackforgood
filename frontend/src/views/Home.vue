<template>
  <div class="home">
    <div id="nav">
      <h1>I am a...</h1>
      <router-link to="/user">User</router-link> |
      <router-link to="/counselor">Counselor</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
