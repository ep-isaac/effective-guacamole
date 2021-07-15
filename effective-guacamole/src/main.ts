import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import { apolloProvider } from "@/apolloClient";
import { DefaultApolloClient } from '@vue/apollo-composable'
import { provide } from "@vue/composition-api";

Vue.config.productionTip = false;

Vue.use(VueApollo);

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloProvider)
  },
  render: (h) => h(App),
}).$mount("#app");
