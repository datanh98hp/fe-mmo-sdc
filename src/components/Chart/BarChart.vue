<template>
    <Bar
        :chart-data="chartData"
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
    data() {
       /* let arrClick=[]
        let arrChuyendoi=[]
        let arrTongso=[]*/
        return {
            chartData: {
                labels: [ 'Thứ 2', 'Thứ 3', 'Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ Nhật'],
                datasets: [
                    {
                        label: 'Click',
                        backgroundColor: '#fff220',
                        data: [20, 25, 45]
                    },
                    {
                        label: 'Chuyển đổi',
                        backgroundColor: '#fff00',
                        data: [40, 10, 50]
                    },
                    {
                        label: 'Tổng số',
                        backgroundColor: '#f87979',
                        data: [60, 20, 60]
                    }
                ]
            }
        }
    }
}


</script>