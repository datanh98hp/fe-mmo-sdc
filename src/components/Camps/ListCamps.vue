<template>
    <div class="col">
        <form @submit="handleSearch($event)">
            <div class="row user">
                <div class="form-group px-2">
                    <label for="inputState">Ten</label>.
                    <input type="text" class="form-control"
                           aria-describedby="" v-model="searchValue.campTxt"
                           @input="search($event.target.value)"
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
<!--                <div class="form-group">
                    <label for="inputState"></label>
                    <button class="btn btn-outline-primary" type="submit">Tìm</button>
                </div>-->
                <hr>
            </div>
        </form>
        <hr>
        <div class="row col-12">
            <ItemCamp v-for="(item) in data" :key="item.camp_Id" :id="item.camp_Id" :name="item.camp_Name" :price="item.price" :link="pre_link(item.camp_Id)" :img="item.camps_Image" :type="item.type" :description="item.description"/>
        </div>
    </div>
</template>

<script>

import { reactive } from 'vue'
import {mapState} from 'vuex'
import ItemCamp from "@/components/Camps/ItemCamp";
import axios from "axios";
export default {
    name:'list-camps',
    components:{
        ItemCamp
    },
    data(){
        return {
            searchValue:{
                campTxt:"",
                type:'',
            }
        }
    },
    computed:mapState({
        data: state => reactive(state.listCamps),
    }),

    mounted() {
        this.$store.dispatch('getListCamps')
        console.log(this.searchValue.campTxt)
    },
    watch:{
        searchValue:function (value){
            console.log("watch :",value.campTxt)
        }
    },
    methods:{
        search(value){
            //
            if(value!==''){
                //handle search
                console.log("search: ",value)
                const url = `https://accestradeapi3.somee.com/api/Camps/GetcampsByName?name=${value}`
                const token = this.$store.getters.getTokenUser
                //get data agains
                axios.get(url,{
                    headers:{
                        Authorization:'Bearer '+ token
                    }
                }).then((res)=>{
                    //set result
                    this.$store.commit('setListDataCamps',res.data)
                    this.$store.dispatch('getListCamps')
                })
            }
        },
        handleSearch(e){
            e.preventDefault()
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