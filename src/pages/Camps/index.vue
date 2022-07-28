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
    components: {Layout,ListCamps}
}
</script>