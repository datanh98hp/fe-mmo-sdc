<template>
    <div class="row justify-content-lg-center">
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

    </div>

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
            type:Array,
            default:()=>[]
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
            default: 450
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
        },

    },
    mounted() {
        this.chartData.labels = this.$store.getters.getLablesChart
        this.chartData.datasets[0].data = this.$store.getters.getClickDataChart
        this.chartData.datasets[1].data = this.$store.getters.getTransDataChart
        //
        this.chartDataSys.labels = this.$store.getters.getLablesChart
        this.chartDataSys.datasets[0].data = this.$store.getters.getClickDataSysChart
        this.chartDataSys.datasets[1].data = this.$store.getters.getTransDataSysChart
    },
    computed: {
        chartDataUpdate() {
           let data = [this.chartData,this.chartDataSys]
            data[0].labels = this.$store.getters.getLablesChart
            data[0].datasets[0].data = this.$store.getters.getClickDataChart
            data[0].datasets[1].data = this.$store.getters.getTransDataChart
            //
            data[1].labels = this.$store.getters.getLablesChart
            data[1].datasets[0].data = this.$store.getters.getClickDataSysChart
            data[1].datasets[1].data = this.$store.getters.getTransDataSysChart
            return data
        },
       /* chartOptions() {
            return /!* mutable chart options *!/
        }*/
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label:'Click',
                        backgroundColor:"#4B066d",
                        data: []
                    },
                    {
                        label:'Chuyển đổi   ',
                        backgroundColor:"#4Aa66d",
                        data: []
                    },

                ]
            },
            chartDataSys:{
                labels: [],
                datasets: [
                    {
                        label:'Click',
                        backgroundColor:"#4B066d",
                        data: []
                    },
                    {
                        label:'Chuyển đổi   ',
                        backgroundColor:"#4Aa66d",
                        data: []
                    },

                ]
            }
            ,
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>