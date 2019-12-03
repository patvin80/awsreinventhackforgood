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
              <md-button class="md-raised md-success" @click="createOrFetchPlan">{{ buttonText }}</md-button>
            </div>
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
      planID: '',
    };
  },
  computed: {
    buttonText() {
      return this.planID === '' ? 'CREATE PLAN' : 'MANAGE PLAN'
    },
    hasPlanIDSet() {
      return !!window.planID
    }
  },
  methods: {
    createOrFetchPlan() {
      if (this.planID === '') {
        const planID = this.generatePlanID()
        console.log({ planID })
        this.$store.commit('updatePlanID', planID)
        this.$router.push({ path: 'warning-signs' })
        return
      }

      const url = 'https://d0dcpgvcla.execute-api.us-east-1.amazonaws.com/Prod/plangetapi?optin=false'
      fetch(url)
        .then(res => {
          return res.text()
        })
        .then(json => {
          console.log({ json: JSON.parse(json) })
          this.$store.commit('updatePlanID', this.planID)
          this.$store.commit('updatePlanData', JSON.parse(json))
          this.$router.push({ path: 'warning-signs' })
        })
    },
    generatePlanID() {
      return Math.random().toString().slice(2,7);
    }
  }
};
</script>
