<template>
    <Layout>
        <div class="row-cols-md-3">
            <form @submit="this.submit($event)">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Từ</span>
                </div>
                <input type="date" class="form-control" v-model="fromTime" placeholder="" aria-label="Username" aria-describedby="addon-wrapping">
                <div class="input-group-prepend">
                    <span class="input-group-text" >Đến</span>
                </div>
                <input type="date" class="form-control" v-model="toTime" placeholder="" aria-label="Username" aria-describedby="addon-wrapping">

                <button type="submit" class="btn btn-outline-primary px-3 mx-3">Tìm</button>
            </div>

            </form>
        </div>
        <hr>
        <div>
            <DataTable :data="this.dataReport" />
        </div>
    </Layout>
</template>
<script>
import Layout from "@/layout";
import DataTable from "@/components/DataTable"
import {mapState} from "vuex";
import {reactive} from "vue";
export default {
    name:"report-page",
    components:{
        Layout,
        DataTable
    },
    computed:mapState({
        dataReport: state=> reactive(state.dataReportByUser.data)
    }),
    mounted() {
        const date = new Date()
        let today = date.getFullYear() +'/'+ (date.getMonth()+1) +'/'+date.getDate()
        this.fromTime = today+' 23:59:59'
        this.toTime = today+' 23:59:59'

        console.log(this.fromTime)
        console.log(this.toTime)

        //
        this.$store.commit('setFromDateReport',this.fromTime)
        this.$store.commit('setToDateReport',this.toTime)
        //
        this.$store.dispatch('getDataReportByUser')
    },
    methods:{
      submit(e){
          e.preventDefault()
          let fromTime = this.fromTime
          let toTime=this.toTime

          console.log(this.fromTime)
          console.log(this.toTime)

          this.$store.commit('setFromDateReport',fromTime)
          this.$store.commit('setToDateReport',toTime)
          //
          this.$store.dispatch('getDataReportByUser')

          console.log("submit..........")
          //check fromTime & toTime not null or equal with ''
      }
    },
    data(){
        return {
            loading:false,
            fromTime:'',
            toTime:''
        }
    }
}
</script>