<template>
    <div class="row">
        <ItemCamp v-for="(item) in this.$data" :key="item.id" />
    </div>
</template>

<script>
import ItemCamp from "@/components/Camps/ItemCamp";
/*import { reactive } from 'vue'*/
export default {
    name:'list-camps',
    components:{
        ItemCamp,
    },
    data(){
        return {
            data:[]
        }
    },

    mounted() {
        this.loadCamps()
    },
    computed(){
        this.$data = this.$store.getters.getListCamps
    },
    methods:{
        loadCamps(){
            this.$store.dispatch('getListCamps')

            /*const url = "http://accestradeapi3.somee.com/api/Camps/GetALL";
            const token = this.$store.getters.getTokenUser
            /!*console.log(token)*!/
                this.axios.get(url,{
                    headers:{
                        'Authorization':'Bearer '+ token
                    }
                }).then((res)=>{
                console.log(res.data);
            })

           console.log("danhs sach camp se duoc hien thi")

             */
        },

    }
}
</script>
<style>

</style>