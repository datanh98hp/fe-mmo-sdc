<template>
    <Layout>
        <ListCamps/>
    </Layout>
</template>
<script>
import Layout from "@/layout";
import ListCamps from "@/components/Camps/ListCamps";
export default {
    name:'page-camps',
    components: {Layout,ListCamps},
    mounted() {
        const user = localStorage.getItem('user-inf') || undefined;
        if (user == undefined) {
            this.$router.push({name:'Login'})
        }else {
            this.$router.push({name:'Camps'})
        }
    }
}
</script>