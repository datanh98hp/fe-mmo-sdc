<template>
  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">{{$props.title}}</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive-md">
            <table class="table table-borderless"
                        width="100%" cellspacing="0">

                    <thead class="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Thiết bị</th>
                        <th>Hoa hồng</th>
                        <th>T.Gian lead</th>
                        <th>Trạng thái</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(item,index) in $props.data" :key="item.oder_Id">
                        <td>{{index}}</td>
                        <td>{{item.campName}}</td>
                        <td>
                            <span v-if="item.device_Type=='pc'">
                                <PCIcon/>
                            </span>
                            <span v-else-if="item.device_Type=='mobile'">
                                 <MobileIcon/>
                            </span>
                        </td>
                        <td>{{handleCurrency(item.campPirce)}}</td>
                        <td>{{item.confirmed_Time}}</td>
                        <td>
                            <span class="btn-sm bg-warning rounded-pill text-light" v-if="item.oder_status==1"> Chờ duyệt </span>
                            <span class="btn-sm bg-success rounded-pill text-light" v-if="item.oder_status==2"> Thành công </span>
                            <span class="btn-sm bg-danger rounded-pill text-light" v-if="item.oder_status==0"> Đã hủy </span>
                        </td>
                    </tr>
                    </tbody>
            </table>
      </div>
    </div>
    
  </div>
</template>

<script>
/*import DataTable from 'datatables.net-vue3';*/

import MobileIcon from "@/components/IconCustome/MobileIcon";
import PCIcon from "@/components/IconCustome/PCIcon";

export default {
  name: "table-view",
    components:{
        /*DataTable*/
        MobileIcon,
        PCIcon
    },
  props: ['title','data'],
  data() {
      return {
          loading:false
      }
  },

    methods:{
        /*getListOrder(){
            this.$store.dispatch('getListOrder')
        }*/
        handleCurrency(value){
            const formatter = new Intl.NumberFormat('vi-VN',{
                style:'currency',
                currency:'VND'
            })
            return formatter.format(value);
        }
       /* formatDate(datetime){


        }*/
    }
    ,
    mounted() {
        /*this.getListOrder()*/
    },
};
</script>

<style>

@import 'datatables.net-dt';
@import 'datatables.net-bs5';
</style>