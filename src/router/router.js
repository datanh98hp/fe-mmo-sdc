import {createRouter,createWebHistory} from 'vue-router'
import Home from "@/pages/Home";

import Login from "@/components/Login";

import Camps from "@/pages/Camps";
import Register from "@/Register";
import NotFound from "@/pages/NotFound";

const routes = [
    {path:'/',component:Login},
    { path: '/home', component: Home, name: 'Home' },
    {path:'/login',component:Login,name: 'Login'},
    {path:'/camps',component:Camps,name:'Camps'},
    {path:'/register',component:Register},
    /*{path:'/profile/:id',},*/
    { path: '/:pathMatch(.*)*', name: 'NotFound',component:NotFound },

];

const router = createRouter({
    history:createWebHistory(),
    routes
})


//protect routes
/* const isLogin = () =>{
    if(localStorage.getItem("user-inf"))
    return true;
 }
 const protectedRoutes = [
     'home',
    'profile',
     'camps'
 ]
router.beforeEach((to,from,next)=>{
   const isprotected = protectedRoutes.includes(to.name)
   /!* console.log(isprotected)
    from.name
    next()*!/
 if (isprotected && !isLogin()){
        next({
           path:'/home'
        })
   }
 })*/

export default  router;