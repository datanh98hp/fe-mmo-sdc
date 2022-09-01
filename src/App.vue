<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
    mounted() {
        setInterval(()=>{
            localStorage.clear();
            this.$router.push('Login')
        },60000*5)
        //
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
