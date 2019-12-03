<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-content>
            <div id="typography">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Plan ID</label>
                  <md-input v-model="planID" type="email"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout-item md-size-100 text-right">
              <md-checkbox v-model="optIn" :disabled="this.planID != ''">Opt-in for notifications</md-checkbox>
              <md-button class="md-raised md-success" @click="createOrFetchPlan">{{ buttonText }}</md-button>
            </div>
          </md-card-content>
        </md-card>
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Safety Plans</h4>
            <p
              class="category"
              style="font-weight:bold; color:#000"
            >View list of safety plans that need follow up</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
      planID: "",
      optIn: false
    };
  },
  computed: {
    buttonText() {
      return this.planID === "" ? "CREATE PLAN" : "MANAGE PLAN";
    },
    hasPlanIDSet() {
      return !!window.planID;
    }
  },
  methods: {
    createOrFetchPlan() {
      if (this.planID === "") {
        this.generatePlanID();
      }

      const url =
        "https://d0dcpgvcla.execute-api.us-east-1.amazonaws.com/Prod/plangetapi?optin=false";
      fetch(url)
        .then(res => {
          return res.text();
        })
        .then(json => {
          console.log({ json: JSON.parse(json) });
          this.$store.commit("updatePlanID", this.planID);
          this.$store.commit("updatePlanData", JSON.parse(json));
          this.$router.push({ path: "warning-signs" });
        });
    },
    generatePlanID() {
      if (this.optIn) {
        const url =
          "https://d0dcpgvcla.execute-api.us-east-1.amazonaws.com/Prod/plansave";

        fetch(url, { method: "post", body: '{ "optin": "true" }' }).then(
          res => {
            this.$store.commit("updatePlanID", 1234);
            this.$router.push({ path: "warning-signs" });
          }
        );
      }
    }
  }
};
</script>
