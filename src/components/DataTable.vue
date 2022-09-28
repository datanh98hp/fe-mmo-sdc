<template>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{{$props.title}}</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive-md">
                <table class="table table-borderless" id=""
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
                        <th>    </th>
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
                        <td>{{handleCurrency(item.hoangHongChoDuyet)}}</td>
                        <td>
                            <button @click="getDetailCampReport(item.camp_Id)"
                                class="btn btn-link"
                                href="#"
                                data-toggle="modal"
                                :data-target="'#Modal-detail-'+index"
                            >
                                <i
                                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                                ></i>
                                Chi tiet
                            </button>
                        </td>
                        <!-- Logout Modal-->
                        <div
                            class="modal fade"
                            :id=" 'Modal-detail-'+index"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Danh sách chi tiết - CampName</h5>
                                        <button
                                            class="close"
                                            type="button"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Tu ngày {{this.$store.state.dataReportByUser.from}} đến {{this.$store.state.dataReportByUser.to}}</p>
                                      <div v-show="loading || dataDetail.length==0" class="text-center">
                                        <div class="spinner-border" role="status">
                                          <span class="sr-only">Loading...</span>
                                        </div>
                                      </div>
                                        <div v-show="!loading ||  dataDetail.length !==0">
                                            <table class="table table-xl table-hover table-responsive">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#Id</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">TimeSalse</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                <tr v-for="(it) in dataDetail" :key="it.oderId">
                                                    <th scope="row">{{it.oderId}}</th>
                                                    <td>{{it.price}}</td>
                                                    <td>{{it.status}}</td>
                                                    <td>{{it.timeSale}}</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
<!--                                        <DetailDataCampReport :campId="item.camp_Id" />-->
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            class="btn btn-secondary"
                                            type="button"
                                            data-dismiss="modal"
                                        >
                                            Hủy
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                <!---End model--->
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
                        <th>Tổng : {{handleCurrency(sumHH_Cho)}}</th>
                        <td></td>
                    </tr>
                    </tfoot>
                </table>

            </div>
        </div>

    </div>
</template>

<script>

/*import PcIcon from "@/components/IconCustome/PCIcon";*/


//import DetailDataCampReport from "@/components/Table/DetailDataCampReport";
export default {
    name: "data-table",
    components:{
      //DetailDataCampReport
        /*PcIcon*/
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
            loading:true,
            dataDetail:[]
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
        sumHH_Cho(){
            return this.$store.getters.getReportSumHH_Cho
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
        getDetailCampReport(camp_Id){
            this.$store.commit('setDetailDataCamp',camp_Id)
           //this.dataDetail = this.$store.state.dataReportByUser.dataDetailReportCamp
          this.dataDetail = this.$store.getters.getdataDetailReportCamp
          this.loading = false

        }
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