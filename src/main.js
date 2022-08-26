import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from './store/index'

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios,axios)
    .mount('#app');