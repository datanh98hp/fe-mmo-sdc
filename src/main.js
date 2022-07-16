import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import App from './App.vue'
// import Login from './components/Login'
import Layout from './layout/index'

const routes = [
    { path: '/', component:Layout  }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
