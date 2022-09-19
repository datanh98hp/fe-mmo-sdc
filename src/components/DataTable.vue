<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{{$props.title}}</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive-md">
                <table class="table table-borderless" id="dataTable"
                       width="100%" cellspacing="0">
                    <thead class="thead-light">
                    <tr>
                        <th>#</th>
                        <th>CampsName</th>
                        <th>SL_Thành công</th>
                        <th>H.H Thành công</th>
                        <th>SL_Hủy</th>
                        <th>Hoa Hồng Hủy</th>
                        <th>SL Chờ duyệt</th>
                        <th>H.H Chờ duyệt</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(item,index) in $props.data" :key="item.oder_Id" >
                        <td>{{index}}</td>
                        <td>{{item.camp_Name}}</td>
                        <td>{{item.slThanhCong}}</td>
                        <td>{{handleCurrency(item.hoangHongDuyet)}}</td>
                        <td>{{item.slHuyBo}}</td>
                        <td>{{handleCurrency(item.hoaHongHuy)}}</td>
                        <td>{{item.slChoDuyet}}</td>
                        <td>{{handleCurrency(item.hoangHongDuyet)}}</td>
                    </tr>

                    </tbody>
                    <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Tổng : {{sumSlThanhCong}} </th>
                        <th>Tổng : {{handleCurrency(sumHH_Thanhcong)}} </th>
                        <th>Tổng : {{sumSlHuy}}  </th>
                        <th>Tổng : {{handleCurrency(sumHH_Huy)}}</th>
                        <th>Tổng : {{sumSLCho}}</th>
                        <th>Tổng : "Đang cập nhật"</th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "data-table",
    components:{
        /*DataTable*/
    },
    props: {
        data:{
            type:Array,
            default:()=>[]
        },
        title:{
            type:String,
            default:''
        }
    },

    data() {
        return {
            loading:false,
            /*slHuy:0,
            slDuyet:0,
            slCho:0,
            HH_Duyet:0,
            HH_Cho:0,
            HH_Huy:0*/
        }
    },
    computed:{
        sumSlThanhCong(){
            return this.$store.getters.getReportSumSLThanhCong
        },
        sumHH_Thanhcong(){
            return this.$store.getters.getReportSumHH_Duyet
        },
        sumSlHuy(){
            return this.$store.getters.getReportSumSLHuy
        },
        sumHH_Huy(){
            return this.$store.getters.getReportSumHH_Huy
        },
        sumSLCho(){
            return this.$store.getters.getReportSumSLCho
        },
        sumHH_Cho(){ //dang cap nhat
            return this.$store.getters.getReportSumSLCho
        },

    },
    methods:{

        handleCurrency(value){
            const formatter = new Intl.NumberFormat('vi-VN',{
                style:'currency',
                currency:'VND'
            })
            return formatter.format(value);
        },

        /*formatDate(datetime){
            let date = new Date(datetime.toString())
            let srtDate = date.toLocaleString()
            let day = srtDate.split('/')[1]
            let month = srtDate.split('/')[0]
            let year = srtDate.split('/')[2].split(',')[0]
            let time = srtDate.split('/')[2].split(',')[1]

            return  `${day}/${month}/${year} ${time}`
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