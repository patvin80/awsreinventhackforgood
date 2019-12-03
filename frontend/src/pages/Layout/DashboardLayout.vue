<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>home</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/warning-signs">
        <md-icon>warning</md-icon>
        <p>Warning Signs</p>
      </sidebar-link>
      <sidebar-link to="/internal-coping-strategies">
        <md-icon>sentiment_very_satisfied</md-icon>
        <p>Internal Coping Strategies</p>
      </sidebar-link>
      <sidebar-link to="/social-contacts">
        <md-icon>people_alt</md-icon>
        <p>Social Contacts</p>
      </sidebar-link>
      <sidebar-link to="/family-members-or-friends">
        <md-icon>people_outline</md-icon>
        <p>Family Members or Friends</p>
      </sidebar-link>
      <sidebar-link to="/upgrade" :class="linkClass">
        <md-icon>business_center</md-icon>
        <p>Professionals and Agencies</p>
      </sidebar-link>
      <sidebar-link to="/upgrade" :class="linkClass">
        <md-icon>healing</md-icon>
        <p>Making the Environment<br/> Safe</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  computed: {
    linkClass() {
      return this.hasPlanIDSet ? 'disabled' : ''
    },
    hasPlanIDSet() {
      return !!this.$store.state.planID;
    }
  }
};
</script>
<style scoped>
.disabled {
  color: red;
}
</style>
