<template>
 <Layout>

     <div class="row">
<!--        <input @input="handleSearch">-->
     </div>

     <div class="row loading-view" v-show="loading == true"></div>
     <div class="row">
         <CardSalary name="Doanh thu tháng" :value="this.handleCurrency(this.turnover.curent_Month_Turnover)" theme="border-left-primary" />
         <CardSalary name="Doanh hôm nay" :value="this.handleCurrency(this.turnover.today_Turnover)" theme="border-left-success" />
         <CardSalary name="Đang chờ duyệt" :value="this.handleCurrency(this.turnover.watting_Turnover)" theme="border-left-warning" />
         <CardSalary name="Tổng" :value="this.handleCurrency(this.turnover.total_Turnover)" theme="border-left-info" />
     </div>
     <div class="row text-md-center">
         <div class="text-center">
             Bieu do
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

export default {
  name:'Home-component',
  components:{
      CardSalary,
      Layout,
      Table
  },
    data() {
        /*const dataNumber = [[50, 30, 15, 50, 20, 28],[40, 20, 12, 15, 20, 25]];
        const user = JSON.parse(localStorage.getItem('user-inf'))*/
        return {
            name:'DA',
            loading:false
        };
    },
    computed: mapState({
        listOrder: state => reactive(state.listOrder),
        listOrderSys:state => reactive(state.listOrderSys),
        turnover: state =>  reactive(state.turnover),

    }),
    watch: {
        // khi thay đổi gia tri  se dk goi
    }
   ,
    methods:{
       /* handleSearch(){
            console.log('Handle Search...........')
        },*/
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