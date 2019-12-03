<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Safety Plan - Social Contacts</h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <div class="alert alert-info">
                  <span>
                    Welcome to the Safety Plan: Social Contats.
                    <br />In this section, you will work with the caller
                    to determine people and social settings that provide distraction.
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
                    <label>Name</label>
                    <md-input ref="name" name="name" type="text" :value="answer[0]"></md-input>
                  </md-field>
                  <md-field>
                    <label>Phone</label>
                    <md-input ref="phone" name="phone" type="text" :value="answer[1]"></md-input>
                  </md-field>
                  <md-button class="md-raised md-primary" type="submit">Add</md-button>
                </form>
              </div>
              <div
                class="md-layout-item md-small-size-100 md-size-50"
                v-for="(answer, index) in answersPlaces"
                :key="index"
                :index="index"
              >
                <form action @submit.prevent="handlePlacesInput($event)">
                  <input name="index" type="hidden" :value="index" />
                  <md-field>
                    <label>Place</label>
                    <md-input ref="place" name="place" type="text" :value="answer"></md-input>
                  </md-field>
                  <md-button class="md-raised md-primary" type="submit">Add</md-button>
                </form>
              </div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success">Save</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answersContacts: [['']],
      answersPlaces: ['']
    };
  },
  methods: {
    handleContactsInput(e) {
      let name = e.target.elements.name.value;
      let phone = e.target.elements.phone.value;
      let index = e.target.elements.index.value;

      this.answersContacts[index] = [name, phone];
      this.answersContacts.push("");

      this.$nextTick(() => {
        this.$refs["name"][Number(index) + 1].$el.focus();
      });
    },
    handlePlacesInput(e) {
      let place = e.target.elements.place.value;
      let index = e.target.elements.index.value;

      this.answersPlaces[index] = place;
      this.answersPlaces.push("");

      this.$nextTick(() => {
        this.$refs["place"][Number(index) + 1].$el.focus();
      });
    }
  }
};
</script>
