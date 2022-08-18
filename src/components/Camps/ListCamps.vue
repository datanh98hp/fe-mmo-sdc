<template>
    <div class="row" v-for="item in this.$props.data" :key="item.camp_Id">
        <li>{{item.camp_Name}}</li>
    </div>
</template>

<script>
/*
import ItemCamp from "@/components/Camps/ItemCamp";
*/
/*import { reactive } from 'vue'*/
import {mapState} from 'vuex'
export default {
    name:'list-camps',
    components:{
       /* ItemCamp,*/
    },
    data(){
        return {
            data:[]
        }
    },
    computed:mapState({
        data: state => state.listCamps
    }),
    mounted() {
        this.loadCamps()
    },
    methods:{
        loadCamps(){
            this.$store.dispatch('getListCamps')
            console.log("list camps",this.$store.getters.getListCamps);

        },

    }
}
</script>
<style>

</style>