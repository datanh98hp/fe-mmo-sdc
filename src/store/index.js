import {createStore} from 'vuex'
import axios from "axios";
let userinf = localStorage.getItem('user-inf');
userinf = JSON.parse(userinf)
const store = createStore({
    state(){
        return {
            user: userinf,
            isAuth:false,
            listCamps:[]
        }
    },
    mutations:{
        setLogined(state){
            state.isAuth = true;
        },
        updateUserData(state,newUser){
            state.user = newUser;
        },
        setListDataCamps(state,payload){
            state.listCamps = payload;
        }
    },
    actions:{
       /*async loginAction({commit}){
            commit("updateUserData",data)
       }*/
        async getListCamps(context){

            const url = "http://accestradeapi3.somee.com/api/Camps/GetALL";
            const token = context.getters.getTokenUser
           /* console.log(token)*/
            axios.get(url,{
                headers:{
                    'Authorization':'Bearer '+ token
                }
            }).then((res)=>{
                console.log(res.data);
                context.commit('setListDataCamps',res.data)
            })

        }
    },
    getters:{
        getUserInf(state){
            return state.user
        },
        getTokenUser(state){
            return state.user.token
        },
        getUserRole(state){
            return state.user.token
        },
        getStatusLogin(){
            return this.state.isAuth
        },
        getListCamps(state){
            return state.listCamps
        }
    }
})


export default store;