import {createStore} from 'vuex'
import axios from "axios";
let userinf = localStorage.getItem('user-inf');
userinf = JSON.parse(userinf)
const store = createStore({
    state(){
        return {
            user: userinf,
            isAuth:false,
            listCamps:[],
            listOrder:[],
            listOrderSys:[],
            turnover:{}
        }
    },
    mutations:{
        setLogined(state){
            state.isAuth = true;
        },
        updateUserData(state,newUser){
            state.user = newUser;
        },
        setListDataCamps(state,listOrder){
            state.listCamps = listOrder;
        },
        setListOrder(state,listOrder){
            state.listOrder = listOrder
        },
        setListOrderSys(state,listOrderSys){
            state.listOrderSys = listOrderSys
        },
        setTurnover(state,turnover){
            state.turnover = turnover
        }

    },
    ///
    actions:{
        async loginAction({commit}){
            commit("setLogined")
       },
        async getListCamps(context){
            const url = "https://accestradeapi3.somee.com/api/Camps/GetALL";
            const token = context.getters.getTokenUser
           /* console.log(token)*/
            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token
                }
            }).then((res)=>{

                context.commit('setListDataCamps',res.data)
                //context.commit('setLogined')
            })
        },
        async getListOrder(context){
            const token = context.getters.getTokenUser;
            const userId = context.getters.getUserInf.userId
            const data = {userId:userId,numbers_Oder:10}

            const url = `https://accestradeapi3.somee.com/api/Oder/GetLatestOrders`;
            axios.post(url,data,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                console.log(res.data)
                context.commit('setListOrder',res.data)
            })
        },
        async getListOrderSys(context){
            const token = context.getters.getTokenUser;
            //const perEl = process.env.NUMBER_ORDER_PERLOAD
            const url = `https://accestradeapi3.somee.com/api/Oder/GetOderSystem?numberOders=10`;

            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                console.log("LOG: ListOrderSys",res.data)
                context.commit('setListOrderSys',res.data)
            })
        },
        async getTurnoverData(context){
            const token = context.getters.getTokenUser;
            const userId = context.getters.getUserInf.userId;
            const url = `https://accestradeapi3.somee.com/api/Turnover/GetTurnover?userId=${userId}`;
            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                console.log("LOG: Tunorver",res.data)
                context.commit('setTurnover',res.data)
            })
        },
    },
    getters:{
        getUserInf(state){
            return state.user
        },
        getTokenUser(state){
            return state.user.token
        },
        getUserRole(state){
            return state.user.isAdmin
        },
        getStatusLogin(state){
            return state.isAuth
        },
        getListCamps(state){
            return state.listCamps
        },
        getListOrder(state){
            return state.listOrder
        },
        getListOrderSys(state){
            return state.listOrderSys
        },
        getTunorver(state) {
            return state.turnover
        }
    }
})
export default store;