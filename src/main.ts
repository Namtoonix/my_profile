import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./main.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(store)
  .use(VueAxios, axios)
  .use(router)
  .use(vuetify)
  .mount("#app");
