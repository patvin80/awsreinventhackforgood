<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Opt-in Status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Risk Score">{{ item.score }}</md-table-cell>
        <md-table-cell md-label>
          <md-button
            class="md-raised md-success"
            :disabled="item.status != 'Yes' || item.score < 7"
            @click="call()"
          >Follow-up Call</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 12345,
          status: "Yes",
          score: 10
        },
        {
          id: 12346,
          status: "No",
          score: 8
        },
        {
          id: 12347,
          status: "Yes",
          score: 2
        },
        {
          id: 12348,
          status: "No",
          score: 1
        }
      ]
    };
  },
  methods: {
    call() {
      this.notifyVue();

      const url =
        "https://d0dcpgvcla.execute-api.us-east-1.amazonaws.com/Prod/planoutboundcall";
      fetch(url).then(res => {});
    },
    notifyVue() {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "Success - Your follow-up has been initiated.",
        icon: "add_alert",
        horizontalAlign: 'bottom',
        verticalAlign: 'right',
        type: 'success'
      });
    }
  }
};
</script>
