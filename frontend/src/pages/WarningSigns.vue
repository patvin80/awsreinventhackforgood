<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Safety Plan - Warning Signs</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <div class="alert alert-info">
                  <span>
                    Welcome to the Safety Plan: Warning Signs.
                    <br />In this section, you will work with
                    the caller to capture any warning signs (thoughts, images, mood, situation, behavior).
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
              <div class="md-layout-item">
                <vue-json-pretty
                  :data="$store.state.planData.plan.categories[0].questions[0]"
                  v-if="shouldShowJSON"
                ></vue-json-pretty>
              </div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success" @click="addAnswer">Save</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import VueJsonPretty from "vue-json-pretty";

export default {
  data() {
    return {
      answers: [""]
    };
  },
  components: {
    VueJsonPretty
  },
  computed: {
    shouldShowJSON() {
      return this.answers.length > 0 && !!this.answers[0];
    },
    answers() {
      let answers = this.$store.state.planData.plan.categories[0].questions[0].answers.map(
        a => a.anstext
      );
      if (answers && answers.length > 0) {
        this.answers = answers;
      }
    }
  },
  // created() {
  //   if (!!this.$store.state.planData) {
  //     this.answers = this.$store.state.planData.plan.categories[0].questions[0].answers
  //   }
  // },
  methods: {
    addAnswer(val) {
      this.$store.commit("addAnswer", val);
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
