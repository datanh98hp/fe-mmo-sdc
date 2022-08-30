import {createRouter,createWebHistory} from 'vue-router'
import Home from "@/pages/Home";

import Login from "@/components/Login";

import Camps from "@/pages/Camps";
import Register from "@/Register";
import NotFound from "@/pages/NotFound";
import RedirectLink from "@/components/RedirectLink";



const routes = [
    { path: '/',redirect:{name:'Login'}},
    { path: '/home', component: Home, name: 'Home' },
    {path:'/login',component:Login,name: 'Login'},
    {path:'/camps',component:Camps,name:'Camps'},
    {path:'/register',component:Register},
    {path: '/click/:userId/:campId',component: RedirectLink,props:true},
    { path: '/:pathMatch(.*)*', name: 'NotFound',component:NotFound },


];

const router = createRouter({
    history:createWebHistory(),
    routes
})


//protect routes
 const isLogin = () =>{
    let isAuth = true;
    if(localStorage.getItem('isLogin')) isAuth = true;
    isAuth = false
    return isAuth;
 }
 /*const protectedRoutes = [
     'home',
    'profile',
     'camps'
 ]*/
router.beforeEach((to,from,next)=>{
    if(isLogin() && to.name !=='Login'){
        next({name:'Login'});
    }else{
        next()
    }
 })

export default  router;