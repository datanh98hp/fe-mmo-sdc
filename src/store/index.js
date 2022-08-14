import {createStore} from 'vuex'
let userinf = localStorage.getItem('user-inf');
userinf = JSON.parse(userinf)
const store = createStore({
    state(){
        return {
            user: userinf
        }
    },
    mutations:{
        updateUserData(state,newUser){
            state.user = newUser;
        }
    },
    actions:{
       /*async loginAction({commit}){
            commit("updateUserData",data)
       }*/
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
        }
    }
})


export default store;