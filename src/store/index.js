import {createStore} from 'vuex'
import axios from "axios";
let userinf = localStorage.getItem('user-inf');
userinf = JSON.parse(userinf)

const getDefaultState = () => {
    return {
        user: null,
        ip: "0.0.0.0",
        isAuth: false,
        listCamps: [],
        listOrder: [],
        listOrderSys: [],
        turnover: {},
        linkCamp: '',
        resultSearch: {},
        dataChart: [],
        dataChartSys:[],
        dataReportByUser:{}
    }
}
const store = createStore({
    state(){
        return {
            user: userinf,
            ip: "0.0.0.0",
            isAuth: false,
            listCamps: [],
            listOrder: [],
            listOrderSys: [],
            turnover: {},
            linkCamp: '',
            resultSearch: {},
            dataChart: [],
            dataChartSys:[],
            dataReportByUser:{
                data:[],
                from:'',
                to:''
            }
        }
    },
    mutations:{
        resetState(state){
            Object.assign(state, getDefaultState())
        },
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
        },
        setMyIp(state,ip){
            state.ip = ip
        },
        setLinkCamp(state,link) {
            state.link = link
        },
        setDataChart(state,data){
            state.dataChart = data
        },
        setDataChartSys(state,data){
            state.dataChartSys = data
        },
        setFromDateReport(state,fromDate){
            state.dataReportByUser.from = fromDate
        },
        setToDateReport(state,toDate){
            state.dataReportByUser.to = toDate
        },
        setdataReportByUser(state,data){
            state.dataReportByUser.data = data
        }

    },
    ///
    actions:{
        resetState({commit}){
            commit('resetState')
        },
        async getIpAction({commit}){
            const url = 'https://api.ipify.org';

            axios.get(url).then(res=>{
               // console.log(" Get Ip    action IP",res.data)
                commit("setMyIp",res.data)
            })
        }
        ,
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
                context.commit('setLogined')
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
                //console.log(res.data)
                context.commit('setListOrder',res.data)
            })
        },
        async getListOrderSys(context){
            const token = context.getters.getTokenUser;

            const url = `https://accestradeapi3.somee.com/api/Oder/GetOderSystem?numberOders=10`;

            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                ///console.log("LOG: ListOrderSys",res.data)
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
               // console.log("LOG: Tunorver",res.data)
                context.commit('setTurnover',res.data)
            })
        },
        async getDataChart(context){
            const token = context.getters.getTokenUser;
            const userId = context.getters.getUserInf.userId;
            const url = `https://accestradeapi3.somee.com/api/Chart/GetChartViewByUserId?userId=${userId}`;
            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                context.commit('setDataChart',res.data)
            })
        },
        async getDataChartSys(context){
            const token = context.getters.getTokenUser;
            //const userId = context.getters.getUserInf.userId;
            const url = `https://accestradeapi3.somee.com/api/Chart/GetChartViewBySystem`;
            //const url2 = `http://accestradeapi3.somee.com/api/Camps/GetcampsByName`
            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                //console.log(res.data)
                context.commit('setDataChartSys',res.data)
            })
        },

        async getDataReportByUser(context){
            const token = context.getters.getTokenUser;
            const userId = context.getters.getUserInf.userId;

            const fromTime = context.getters.getFromDateReport;
            const toTime = context.getters.getToDateReport;

            const url = `https://accestradeapi3.somee.com/api/Oder/GetByTimetoReport?userId=${userId}&from_Time=${fromTime}&to_Time=${toTime}`
            //2022/09/17
            //2022%2F09%2F01 2022%2F09%2F17

            axios.get(url,{
                headers:{
                    Authorization:'Bearer '+ token,
                },
            }).then((res)=>{
                console.log("STORE: ",res.data)
                context.commit('setdataReportByUser',res.data)
            })
        }


    },
    getters:{
        getUserInf(state){
            return state.user
        },
        getIPAddr(state){
            return state.ip
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
        },
        getChartDataValue(state){
            return state.dataChart
        },
        getLablesChart(state){
            return state.dataChart.map(item=>item.day)
        },
        getClickDataChart(state){
            return state.dataChart.map(item=>item.click_Num)
        },
        getTransDataChart(state){
            return state.dataChart.map(item=>item.tran_Num)
        },
        getChartDataSysValue(state){
            return state.dataChartSys
        },
        getClickDataSysChart(state){
            return state.dataChartSys.map(item=>item.click_Num)
        },
        getTransDataSysChart(state){
            return state.dataChartSys.map(item=>item.tran_Num)
        },
        getFromDateReport(state){
            return state.dataReportByUser.from
        },
        getToDateReport(state){
            return state.dataReportByUser.to
        },
        getDataReportByUser(state){
            return state.dataReportByUser.data
        },
        getReportSumSLThanhCong(state){
            const arr = state.dataReportByUser.data.map(item=>item.slThanhCong)
            let tong = 0
            arr.map(value=>{
                tong+=value
            })
            return tong
        },
        getReportSumSLCho(state){
            const arr = state.dataReportByUser.data.map(item=>item.slChoDuyet)
            let tong = 0
            arr.map(value=>{
                tong+=value
            })
            return tong

        },
        getReportSumSLHuy(state){
            const arr = state.dataReportByUser.data.map(item=>item.slHuyBo)
            let tong = 0
            arr.map(value=>{
                tong+=JSON.parse(value)
            })
            return tong
        },
        // Tinh tong hoa hong cho Cho duyet/Thanh cong/ Da huy
        getReportSumHH_Duyet(state){
            const arr = state.dataReportByUser.data.map(item=>item.hoangHongDuyet)
            let tong = 0
            arr.map(value=>{
                tong+=JSON.parse(value)
            })
            return tong
        },
        getReportSumHH_Cho(state){
            const arr = state.dataReportByUser.data.map(item=>item.hoangHongChoDuyet)
            let tong = 0
            arr.map(value=>{
                tong+=JSON.parse(value)
            })
            return tong
        },
        getReportSumHH_Huy(state){
            const arr = state.dataReportByUser.data.map(item=>item.hoaHongHuy)
            let tong = 0
            arr.map(value=>{
                tong+=JSON.parse(value)
            })
            return tong
        }

    }
})
export default store;