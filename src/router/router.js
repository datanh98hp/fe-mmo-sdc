import {createRouter,createWebHistory} from 'vue-router'
import Home from "@/pages/Home";

import Login from "@/components/Login";
import Layout from "@/layout";
import Camps from "@/pages/Camps";
import Register from "@/Register";
const routes = [
    {path:'/',component:Layout},
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/camps',component:Camps},
    {path:'/register',component:Register}

];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default  router;