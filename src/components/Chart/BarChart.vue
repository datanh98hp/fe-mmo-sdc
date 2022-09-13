<template>
    <Bar
        :chart-data="$props.data" :chart-options="chartOptions"
    />
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name:'chart-bar',
    components:{
        Bar
    },
    props:['data'],
    methods:{
        refreshChartData(){
            console.log("refresh data",this.$store.getters.getLablesChart)
            this.$store.dispatch('getDataChart')
            this.chartData.labels=this.$store.getters.getLablesChart
            this.chartData.datasets[0].data=this.$store.getters.getClickDataChart
            this.chartData.datasets[1].data=this.$store.getters.getTransDataChart

        },

    },

    data() {
   /*     const lables = []*/
        return {
            chartData: {
                labels:this.$store.getters.getLablesChart,
                datasets: [
                    {
                        label: 'Click',
                        backgroundColor: '#fff220',
                        data: this.$store.getters.getClickDataChart
                    },
                    {
                        label: 'Chuyển đổi',
                        backgroundColor: '#f88020',
                        data: this.$store.getters.getTransDataChart
                    },
                ]
            }
        }
    },
    mounted() {

        this.$store.dispatch('getDataChart')
    }
}


</script>