<template>
  <div class="md-layout-item">
    <h1>Create a plan</h1>
    <md-checkbox v-model="skippedQuestions" value="1">Skip this quesion</md-checkbox>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="answer1"></md-input>
    </md-field>

    <md-checkbox v-model="skippedQuestions" value="2">Skip this quesion</md-checkbox>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="answer2"></md-input>
    </md-field>

    <md-checkbox v-model="skippedQuestions" value="3">Skip this quesion</md-checkbox>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="answer3"></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skippedQuestions: [],
      answer1: '',
      answer2: '',
      answer3: '',
    }
  }
}
</script>

<style>
</style>
