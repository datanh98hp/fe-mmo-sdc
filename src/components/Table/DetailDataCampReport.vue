<template>
  <div class="table-responsive">
    <div v-show="loading">Loading...</div>
    <table class="table" v-show="!loading">
      <thead>
      <tr>
        <th scope="col">#Id</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
        <th scope="col">TimeSalse</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(it) in this.list" :key="it.oderId">
        <th scope="row">{{it.oderId}}</th>
        <td>{{it.price}}</td>
        <td>{{it.status}}</td>
        <td>{{it.timeSale}}</td>
      </tr>

      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name:'detail-data-camp-report',
  props:['campId'],

  data(){
    return {
      loading:true,
      list:[]
    }
  },
  methods:{
    // getDetailCampReport(camp_Id){
    //   //this.$store.commit('setDetailDataCamp',camp_Id)
    //   this.list = this.$store.state.dataReportByUser.dataDetailReportCamp
    //   console.log(this.$store.state.dataReportByUser.dataDetailReportCamp)
    // }
  },

  mounted() {
      //this.getDetailCampReport(this.$props.campId)

    this.list = this.$store.state.dataReportByUser.dataDetailReportCamp
    console.log(this.$store.state.dataReportByUser.dataDetailReportCamp)
    this.loading = false

  }
}
</script>