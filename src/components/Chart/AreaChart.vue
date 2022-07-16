<template>
  <div>
    <h2>{{ $props.title }}</h2>
    <!-- <div class="col-xl-12 col-lg-12">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">{{ $props.title }}</h6>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="{{$props.myAreaChart}}"></canvas>
          </div>
          <hr />
        </div>
      </div>
    </div> -->

    <div class="p-6 text-center" style="height: 10%;">
      <Bar :chart-data="chartData" />
    </div>
  </div>
</template>
 
<script>
import { Bar } from "vue-chartjs";
    
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";


ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "Bar-chart",
  props:['title','dataChart'],

  components: { Bar },
  data() {
    console.log(this.$props.dataChart)
    const dataOne = this.$props.dataChart[0]
    const dataTwo = this.$props.dataChart[1]
    return {
      chartData: {
        labels: ["January", "February", "March", "July", "June", "March"],

        datasets: [

          {
            label:'Data One',
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            data: dataOne,
          },
          {
            label:'Data Two',
            backgroundColor: [
              "rgba(255, 120, 132, 0.5)",
              "rgba(255, 10, 64, 0.2)",
              "rgba(255, 100, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(60, 162, 235, 0.2)",
              "rgba(14, 102, 255, 0.2)",
            ],
            data:dataTwo,
          },

        ],
      },
    };
  },

 
};
</script>

<style>
</style>