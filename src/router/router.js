import {createRouter,createWebHistory} from 'vue-router'
import Home from "@/pages/Home";

import Login from "@/components/Login";

import Camps from "@/pages/Camps";
import Register from "@/Register";

const routes = [
    {path:'/',component:Login},
    { path: '/home', component: Home, name: 'Home' },
    {path:'/login',component:Login,name: 'Login'},
    {path:'/camps',component:Camps},
    {path:'/register',component:Register}

];

const router = createRouter({
    history:createWebHistory(),
    routes
})


//protect routes
/* const isLogin = () =>{
    return localStorage.getItem("user-inf");
 }
 const protectedRoutes = [
     'home',
    'profile',
     'camps'
 ]
router.beforeEach((to,from,next)=>{
   const isprotected = protectedRoutes.includes(to.name)
    console.log(isprotected)
    from.name
    next()
 if (isprotected && !isLogin()){
        /!*next({
           path:'/login'
        })*!/
   }
 })*/

export default  router;