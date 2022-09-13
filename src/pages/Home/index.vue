<template>
 <Layout>
     <div class="row loading-view" v-show="loading == true"></div>

     <div class="row">
         <CardSalary name="Doanh thu tháng" :value="this.handleCurrency(this.turnover.curent_Month_Turnover)" theme="border-left-primary" />
         <CardSalary name="Doanh hôm nay" :value="this.handleCurrency(this.turnover.today_Turnover)" theme="border-left-success" />
         <CardSalary name="Đang chờ duyệt" :value="this.handleCurrency(this.turnover.watting_Turnover)" theme="border-left-warning" />
         <CardSalary name="Tổng" :value="this.handleCurrency(this.turnover.total_Turnover)" theme="border-left-info" />
     </div>

     <div class="row justify-content-md-around">
         <div class="col-md-3">
             <div>Click</div>
             <div>Chuyển đổi</div>
             <div>Tổng</div>
         </div>
         <div class="col-md-3">
             <ChartBar :data="this.chartData"/>
         </div>
         <div class="col-md-3">
<!--             <ChartBar :chart-data="this.chartData"/>-->
         </div>
         <div class="col-md-3">
             <div>Click</div>
             <div>Chuyển đổi</div>
             <div>Tổng</div>
         </div>
     </div>
     <div class="row">
         <div class="col-xl-6 mb-2 text-center h-5">
             <Table title="Đơn hàng mới nhất" :data="this.listOrder" />
         </div>
         <div class="col-xl-6 mb-2 text-center h-5">
             <Table title="Đơn hàng hệ thống" :data="this.listOrderSys" />
         </div>
         <!--  -->
         <div class="col-sm-6 mb-4 text-center">

         </div>
     </div>
 </Layout>
</template>
<script>

import Layout from "@/layout";
import Table from "@/components/Table";
import CardSalary from "@/components/SalaryCard";
import {mapState} from "vuex";
import {reactive} from "vue";
import ChartBar from "@/components/Chart/BarChart";

export default {
  name:'Home-component',
  components:{
      ChartBar,
      CardSalary,
      Layout,
      Table
  },
    data() {
        /*const dataNumber = [[50, 30, 15, 50, 20, 28],[40, 20, 12, 15, 20, 25]];
        const user = JSON.parse(localStorage.getItem('user-inf'))*/

        return {
            name:'DA',
            searchText:'',
            loading:false,
            chartData: {
            labels: this.$store.getters.getLablesChart,
                datasets: [
                {
                    label: 'Click',
                    backgroundColor: '#fff220',
                    data: this.$store.getters.getClickDataChart
                },
                {
                    label: 'Chuyển đổi',
                    backgroundColor: '#f55060',
                    data: this.$store.getters.getTransDataChart
                },
            ]
        }
        };
    },
    computed: mapState({
        listOrder: state => reactive(state.listOrder),
        listOrderSys:state => reactive(state.listOrderSys),
        turnover: state =>  reactive(state.turnover),
       // dataChart: state => reactive(state.dataChart)
        chartData() { return /* mutable chart data */ },
        chartOptions() {

            return {

            }
        }
    }),

    watch: {
        searchText:function (value){
            console.log("search :",value)
        },

    }
   ,
    methods:{

        handleCurrency(value){
          const formatter = new Intl.NumberFormat('vi-VN',{
                style:'currency',
                currency:'VND'
            })
            return formatter.format(value);
        },


    },
    mounted() {

      const user = JSON.parse(localStorage.getItem('user-inf'));
        console.log(user)
      if (user) {
          this.$store.dispatch('getDataChart')
          /*this.$router.push({name:'Home'})*/
          this.$store.dispatch('getListCamps')
          this.$store.dispatch('getListOrder')
          this.$store.dispatch('getTurnoverData')
          this.$store.dispatch('getListOrderSys')
          //
          this.$store.dispatch('getIpAction')



      }else {
          //this.$router.push({name:'Login'})
      }
      ///
        /*setInterval(()=>{
            localStorage.clear();
            this.$router.push('Login')
        },60000*30)*/

    }
}
</script>
<style>
.loading-view {
    background-color: rgba(218,243,255,0.99);
    height: 100%;
    width: max-content;
}
</style>