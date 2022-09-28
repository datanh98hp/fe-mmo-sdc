<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="this.$props.data"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    data:{
      type:Object,
      default:()=>{}
    },
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataChart:{},
      chartOptions: {
        responsive: true
      },
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Click",
            backgroundColor: "#fff220",
            data: [],
          },
          {
            label: "Chuyển đổi",
            backgroundColor: "#f55060",
            data: [],
          },
        ],
      }
    }
  },
  mounted(){
      this.chartData.datasets[0].data = this.$store.getters.getClickDataChart
      this.chartData.datasets[1].data = this.$store.getters.getTransDataChart
  },

  
}
</script>