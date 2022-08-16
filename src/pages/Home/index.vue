<template>
 <Layout>
     <div class="row">
         <div class="col-xl-6 mb-4 text-center h-5">
             <Table/>
         </div>
         <div class="col-sm-6 mb-4 text-center">Đơn Hàng Hệ Thống</div>
         <!--  -->
         <div class="col-sm-6 mb-4 text-center">

         </div>
     </div>
 </Layout>
</template>

<script>

import Layout from "@/layout";
import Table from "@/components/Table";
export default {
  name:'Home-component',
  components:{
      Layout,
      Table
  },
    data() {
        const data = [[50, 30, 15, 50, 20, 28],[40, 20, 12, 15, 20, 25]];
       /* const user = JSON.parse(localStorage.getItem('user-inf'))*/
        return {
            data,
        };
    },
  child:{

  },
    mounted() {
      /*const user = localStorage.getItem('user-inf');
      if (user) {
          this.$router.push({name:'Home'})
      }else {
          this.$router.push({name:'Login'})
      }*/
    }
}
</script>