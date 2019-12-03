<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Safety Plan - Making the Environment Safe</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <div class="alert alert-info">
                  <span>
                    Welcome to the Safety Plan: Making the Environment Safe
                    <br /> In this section, you will work with the caller
                    of how he or she can make the environment safe.
                  </span>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div
                class="md-layout-item md-small-size-100 md-size-100"
                v-for="(answer, index) in answers"
                :key="index"
                :index="index"
              >
                <form action @submit.prevent="handleInput($event)">
                  <md-field>
                    <label></label>
                    <md-input ref="answer" name="answer" type="text" :value="answer"></md-input>
                    <input name="index" type="hidden" :value="index" />
                  </md-field>
                </form>
              </div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success" @click="addAnswer">Save</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <md-dialog-alert
      :md-active.sync="showAlert"
      md-content="Your plan has been updated"
      md-confirm-text="OK" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      answers: [""],
      showAlert: false,
    };
  },
  methods: {
    addAnswer(val) {
      this.showAlert = true
    },
    handleInput(e) {
      let answer = e.target.elements.answer.value;
      let index = e.target.elements.index.value;

      this.answers[index] = answer;
      this.answers.push("");

      this.$nextTick(() => {
        this.$refs["answer"][Number(index) + 1].$el.focus();
      });
    }
  }
};
</script>
