<template>
    <ItemCamp/>
    <ItemCamp/>
    <ItemCamp/>
    <ItemCamp/>
    <ItemCamp/>
    <ItemCamp/>
    <ItemCamp/>
    <ItemCamp/>
</template>

<script>
import ItemCamp from "@/components/Camps/ItemCamp";

export default {
    name:'list-camps',
    props:{

    },
    components:{
        ItemCamp,
    },
    data(){
        return {

        }
    },
    mounted() {
        this.loadCamps()
    },
    methods:{
        loadCamps(){
           console.log("danhs sach camp se duoc hien thi")
        },

    }
}
</script>
<style>
    #list-camps {
        padding: 15px;
        width: 100%;
    }
</style>