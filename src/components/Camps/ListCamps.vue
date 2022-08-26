<template>
    <div class="col">

            <form class="row user">
                <div class="form-group px-2">
                    <label for="inputState">P.Loai</label>
                    <input type="text" class="form-control"
                           aria-describedby="emaillHelp"
                           placeholder="Ten chien dich...">
                </div>
                <div class="form-group px-2">
                    <label for="inputState">P.Loai</label>
                    <select id="inputState" class="form-control">
                        <option selected value="Chon ... ">Chon...</option>
                        <option value="">CPS</option>
                        <option value="">CPL</option>
                        <option value="">CPQ</option>
                        <option value="">CPQL</option>
                    </select>
                </div>
                <hr>
            </form>
        <hr>
        <div class="row">
            <ItemCamp v-for="(item) in listCamps" :key="item.camp_Id" :name="item.camp_Name" :link="pre_link(item.camp_Id)" :img="item.camps_Image"/>
        </div>

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