import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from './store/index'
import CKEditor from '@ckeditor/ckeditor5-vue';

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios,axios)
    .use(CKEditor)
    .mount('#app');