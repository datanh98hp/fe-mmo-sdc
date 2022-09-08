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
             <ChartBar/>
         </div>
         <div class="col-md-3">
             <ChartBar/>
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
            datacollection: {
                labels: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8", "week 9", "week 10"],
                datasets: [
                    {
                        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        label: "Africa",
                        borderColor: "#3e95cd",
                        fill: false
                    },
                    {
                        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                        label: "Asia",
                        borderColor: "#8e5ea2",
                        fill: false
                    },
                    {
                        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                        label: "Europe",
                        borderColor: "#3cba9f",
                        fill: false
                    },
                    {
                        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                        label: "Latin America",
                        borderColor: "#e8c3b9",
                        fill: false
                    },
                    {
                        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                        label: "North America",
                        borderColor: "#c45850",
                        fill: false
                    }
                ]
            }
        };
    },
    computed: mapState({
        listOrder: state => reactive(state.listOrder),
        listOrderSys:state => reactive(state.listOrderSys),
        turnover: state =>  reactive(state.turnover),

    }),
    watch: {
        searchText:function (value){
            console.log(value)
        }
    }
   ,
    methods:{

        handleCurrency(value){
          const formatter = new Intl.NumberFormat('vi-VN',{
                style:'currency',
                currency:'VND'
            })
            return formatter.format(value);
        }

    },
    mounted() {

      const user = JSON.parse(localStorage.getItem('user-inf'));
      if (user) {
          /*this.$router.push({name:'Home'})*/

          this.$store.dispatch('getListCamps')
          this.$store.dispatch('getListOrder')
          this.$store.dispatch('getTurnoverData')
          this.$store.dispatch('getListOrderSys')
          //
          this.$store.dispatch('getIpAction')

      }else {
          this.$router.push({name:'Login'})
      }
      ///
        setInterval(()=>{
            localStorage.clear();
            this.$router.push('Login')
        },60000*30)

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