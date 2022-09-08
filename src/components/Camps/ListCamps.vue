<template>
    <div class="col">
            <div class="row user">
                <div class="form-group px-2">
                    <label for="inputState">P.Loai</label>
                    <input type="text" class="form-control"
                           aria-describedby="" v-model.lazy="searchValue.campTxt"
                           @change="search(searchValue.campTxt)"
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
            </div>
        <hr>
        <div class="row col-12">
            <ItemCamp v-for="(item) in listCamps" :key="item.camp_Id" :id="item.camp_Id" :name="item.camp_Name" :price="item.price" :link="pre_link(item.camp_Id)" :img="item.camps_Image" :type="item.type" :description="item.description"/>
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
            data:[],
            searchValue:{
                campTxt:"",
                type:''
            }
        }
    },
    computed:mapState({
        listCamps: state => reactive(state.listCamps),
    }),

    mounted() {

        this.loadCamps()
    },
    watch:{
        searchValue:function (value){
            console.log("watch :",value.campTxt)
        }
    },
    methods:{
        search(value){
            //handle search
            
          console.log("search: ",value)
        },
        loadCamps(){
            this.$store.dispatch('getListCamps')
        },
        pre_link(camId){
            //http://localhost:3000/click?userId=2&campId=c79a13c2-d918-470f-a168-21ff8801ae97
            const host = location.origin
            const userId = JSON.parse( localStorage.getItem('user-inf')).userId
            return `${host}/click/${userId}/${camId}`;

        }

    }
}
</script>
<style>

</style>