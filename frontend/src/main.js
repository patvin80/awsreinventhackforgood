// =========================================================
// * Vue Material Dashboard - v1.2.1
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    planID: '',
    planData: {
      "plan": {
        "consentstatus": "0",
        "phonenumber": "",
        "id": '',
        "categories": [
          {
            "name": "Warning Signs",
            "questions": [
              {
                "qid": "1",
                "prompt": "Ask 'How will you know when the safety plan should be used?'",
                "qtext": "How will you know when the safety plan should be used?",
                "answers": [""]
              }
            ]
          },
        ]
      }
    },
  },
  mutations: {
    updatePlanID (state, planID) {
      state.planID = planID
    },
    updatePlanData (state, planData) {
      state.planData = planData
    },
    addAnswer(state, text) {
      state.planData.plan.categories[0].questions[0].answers[0] = text
    }
  }
})

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
