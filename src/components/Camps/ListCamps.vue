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
            const url = "http://accestradeapi3.somee.com/api/Camps/GetALL";
            const usr = localStorage.getItem('user-inf')
            const token = JSON.parse(usr).token;
/*
            console.log(token)
*/
                this.axios.get(url,{
                    headers:{
                        'Authorization':'Bear '+ token
                    }

                }).then((res)=>{
                console.log(res)
            })

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