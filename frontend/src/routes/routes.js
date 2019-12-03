import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import FamilyMembers from "@/pages/FamilyMembers.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
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
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
