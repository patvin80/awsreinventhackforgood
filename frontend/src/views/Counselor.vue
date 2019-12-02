<template>
  <div class="md-layout-item">
    <h1>This is the top page for counselors</h1>
    <form novalidate class="md-layout" @submit="getPlan">
      <md-field>
        <label>Fill out plan code if already have one</label>
        <md-input v-model="planId" placeholder="plan number"></md-input>
        <md-button :md-ripple="false">Search</md-button>
      </md-field>
    </form>
    <md-button class="md-raised">
      <router-link to="/plan">Create or modify plan</router-link>
    </md-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      planId: null
    };
  },

  methods: {
    getPlan() {
      console.log(this.planId);
      axios.get('/')
        .then(response => {
          this.plan = response.data;
          self.$router.push({
            name: 'create or modify plan',
            params: {
                plan: {
                    "a": "b"
                }
            }
          })
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
</style>
