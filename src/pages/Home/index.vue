<template>
 <Layout>
   asdads
 </Layout>
</template>

<script>

import Layout from "@/layout";
export default {
  name:'Home-component',
  components:{
    Layout
  },
  child:{

  },
    mounted() {
      const user = localStorage.getItem('user-inf');
      if (user) {
          this.$router.push({name:'Home'})
      }else {
          this.$router.push({name:'Login'})
      }
    }
}
</script>