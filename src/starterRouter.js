import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import About from "./views/About.vue";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Starter,
        footer: Footer
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: Header,
        default: About,
        footer: Footer
      }
    },
    // {
    //   path: "/components",
    //   name: "components",
    //   components: {
    //     header: Header,
    //     default: Components,
    //     footer: Footer
    //   }
    // },
    // {
    //   path: "/landing",
    //   name: "landing",
    //   components: {
    //     header: Header,
    //     default: Landing,
    //     footer: Footer
    //   }
    // },
  ]
});
