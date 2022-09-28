<template>
  <Layout>
    <div class="row loading-view" v-show="this.loading == true"></div>

    <div class="row">
      <CardSalary
        name="Doanh thu tháng"
        :value="
          this.handleCurrency(
            this.$store.getters.getTunorver.curent_Month_Turnover
          )
        "
        theme="border-left-primary"
      />
      <CardSalary
        name="Doanh hôm nay"
        :value="
          this.handleCurrency(this.$store.getters.getTunorver.today_Turnover)
        "
        theme="border-left-success"
      />
      <CardSalary
        name="Đang chờ duyệt"
        :value="
          this.handleCurrency(this.$store.getters.getTunorver.watting_Turnover)
        "
        theme="border-left-warning"
      />
      <CardSalary
        name="Tổng"
        :value="
          this.handleCurrency(this.$store.getters.getTunorver.total_Turnover)
        "
        theme="border-left-info"
      />
    </div>

    <!-- <div class="row justify-content-md-around">
      <div class="col-sm-3">
        <ChartBar :dataArr="this.chartData" />
      </div>
      <div class="col-sm-3">
        <ChartBar :dataArr="this.chartDataSys" />
      </div>
    </div> -->
    <!-- <div class="row justify-content-md-around">
      <div class="col-sm-6">
        <canvas id="charByUser" width="400" height="400"></canvas>
      </div>
      <div class="col-sm-6">
        <canvas id="charBySys" width="400" height="400"></canvas>
      </div>
    </div> -->
    <div class="row">
      <div class="col-xl-6 mb-2 text-center h-25">
        <Table title="Đơn hàng mới nhất" :data="this.listOrder" />
      </div>
      <div class="col-xl-6 mb-2 text-center h-25">
        <Table title="Đơn hàng hệ thống" :data="this.listOrderSys" />
      </div>
      
      <div class="col-sm-6 mb-4 text-center"></div>
    </div>
  </Layout>
</template>


<script>
import Layout from "@/layout";
import Table from "@/components/Table";
import CardSalary from "@/components/SalaryCard";
import { mapState } from "vuex";
import { reactive } from "vue";
//import ChartBar from "@/components/Chart/BarChart";

export default {
  name: "Home-component",
  components: {
    //ChartBar,
    CardSalary,
    Layout,
    Table,
  },
  data() {
    return {
      searchText: "",
      loading: false,
      // chartData: {
      //   labels: [],
      //   datasets: [
      //     {
      //       label: "Click",
      //       backgroundColor: "#fff220",
      //       data: [],
      //     },
      //     {
      //       label: "Chuyển đổi",
      //       backgroundColor: "#f55060",
      //       data: [],
      //     },
      //   ],
      // },
      // chartDataSys: {
      //   labels: [],
      //   datasets: [
      //     {
      //       label: "Click",
      //       backgroundColor: "#fff045",
      //       data: [],
      //     },
      //     {
      //       label: "Chuyển đổi",
      //       backgroundColor: "#fa0160",
      //       data: [],
      //     },
      //   ],
      // },
    };
  },
  computed: mapState({
    listOrder: (state) => reactive(state.listOrder),
    listOrderSys: (state) => reactive(state.listOrderSys),
    turnover: (state) => reactive(state.turnover),
    // dataChartByUser: (state) => reactive(state.dataChart),
    // dataChartBySys: (state) => reactive(state.dataChartSys),
  }),

  watch: {
    searchText: function (value) {
      console.log("search :", value);
    },
  },
  methods: {
    handleCurrency(value) {
      const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(value);
    },
    
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user-inf"));
    //console.log(user)
    if (user) {
      this.$store.dispatch("getDataChart");
      this.$store.dispatch("getDataChartSys");
     
      this.$store.dispatch("getListCamps");
      this.$store.dispatch("getListOrder");
      this.$store.dispatch("getTurnoverData");
      this.$store.dispatch("getListOrderSys");
      //
      this.$store.dispatch("getIpAction");
    } else {
      this.$router.push({ name: "Login" });
    }
    ///
    /*setInterval(()=>{
            localStorage.clear();
            this.$router.push('Login')
        },60000*30)*/
  },
};
</script>

<style>
.loading-view {
  background-color: rgba(218, 243, 255, 0.99);
  height: 100%;
  width: max-content;
}
</style>