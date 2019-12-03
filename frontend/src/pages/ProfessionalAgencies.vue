<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Safety Plan - Professionals or Agencies</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <div class="alert alert-info">
                  <span>
                    Welcome to the Safety Plan: Professionals or Agencies.
                    <br />In this section, you will work with the caller
                    to provide professionals or agencies he/she can contact during a crisis.
                  </span>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div
                class="md-layout-item md-small-size-100 md-size-50"
                v-for="(answer, index) in answersContacts"
                :key="index"
                :index="index"
              >
                <form action @submit.prevent="handleContactsInput($event)">
                  <input name="index" type="hidden" :value="index" />
                  <md-field>
                    <label>Clinician Name</label>
                    <md-input ref="name" name="name" type="text" :value="answer[0]"></md-input>
                  </md-field>
                  <md-field>
                    <label>Phone</label>
                    <md-input ref="phone" name="phone" type="text" :value="answer[1]"></md-input>
                  </md-field>
                   <md-field>
                    <label>Clinician Pager or Emergency Contact #</label>
                    <md-input ref="pager" name="pager" type="text" :value="answer[2]"></md-input>
                  </md-field>
                  <md-button class="md-raised md-primary" type="submit">Add</md-button>
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
      answersContacts: [['', '', '']],
      showAlert: false,
    };
  },
  methods: {
    addAnswer(val) {
      this.showAlert = true
    },
    handleContactsInput(e) {
      let name = e.target.elements.name.value;
      let phone = e.target.elements.phone.value;
      let pager = e.target.elements.pager.value;
      let index = e.target.elements.index.value;

      this.answersContacts[index] = [name, phone, pager];
      this.answersContacts.push("");

      this.$nextTick(() => {
        this.$refs["name"][Number(index) + 1].$el.focus();
      });
    }
  }
};
</script>
