<template>
    <div class="row">
<!--        <div class="">
            <form class="user">
                <div class="form-group">
                    <input type="text" class="form-control form-control-user"
                           aria-describedby="emaillHelp"
                           placeholder="Enter user name...">
                </div>
                <hr>
            </form>
        </div>-->
       <ItemCamp  v-for="(item) in listCamps" :key="item.camp_Id" :name="item.camp_Name" :link="pre_link(item.camp_Id)" :img="item.camps_Image"/>
    </div>
</template>

<script>

import { reactive } from 'vue'
import {mapState} from 'vuex'
import ItemCamp from "@/components/Camps/ItemCamp";
export default {
    name:'list-camps',
    components:{
        ItemCamp
    },
    data(){
        return {
            data:[]
        }
    },
    computed:mapState({
        listCamps: state => reactive(state.listCamps),
    }),

    mounted() {
        this.loadCamps()
    },
    methods:{
        loadCamps(){
            console.log('')
            this.$store.dispatch('getListCamps')
        },
        pre_link(camId){
            //http://localhost:3000/click?userId=2&campId=c79a13c2-d918-470f-a168-21ff8801ae97
            const userId = JSON.parse( localStorage.getItem('user-inf')).userId
            return `http://localhost:8080/click?userId=${userId}&campId=${camId}`;

        }

    }
}
</script>
<style>

</style>