<template>
  <div class="md-layout-item">
    <h1>This is the top page for counselors</h1>
    <md-field>
      <label>Fill out plan code if already have one</label>
      <md-input v-model="planId" placeholder="plan number"></md-input>
    </md-field>
    <md-button class="md-raised">
      <router-link to="/plan">Create or modify plan</router-link>
    </md-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planId: null,
    }
  }
}
</script>

<style scoped>
</style>
