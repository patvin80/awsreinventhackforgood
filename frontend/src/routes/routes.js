import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import FamilyMembers from "@/pages/FamilyMembers.vue";
import ProfessionalAgencies from "@/pages/ProfessionalAgencies.vue";
import MakingTheEnvironmentSafe from "@/pages/MakingTheEnvironmentSafe.vue";
import WarningSigns from "@/pages/WarningSigns.vue";
import InternalCopingStrategies from "@/pages/InternalCopingStragies.vue";
import SocialContacts from "@/pages/SocialContacts.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Home",
        component: Dashboard
      },
      {
        path: "warning-signs",
        name: "Warning Signs",
        component: WarningSigns
      },
      {
        path: "internal-coping-strategies",
        name: "Internal Coping Strategies",
        component: InternalCopingStrategies
      },
      {
        path: "social-contacts",
        name: "Social Contacts",
        component: SocialContacts
      },
      {
        path: "family-members-or-friends",
        name: "Family Members",
        component: FamilyMembers
      },
      {
        path: "professional-and-agencies",
        name: "Professional and Agencies",
        component: ProfessionalAgencies
      },
      {
        path: "making-the-environment-safe",
        name: "Making the Environment Safe",
        component: MakingTheEnvironmentSafe
      }
    ]
  }
];

export default routes;
