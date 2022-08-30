<template>
    <div>
        <div v-if="stt==0">Dang chuyển hướng  .. . . . .</div>
        <div v-if="stt==-1">IP da ton tai</div>
    </div>

</template>
<script>
import axios from "axios";


export default {
    name:'redirect-link',
    props:['userId','campId'],
    data(){
      return {
          stt:0
      }
    },

    mounted() {
        this.$store.dispatch('getIpAction')
        /*window.location.href= this.getLink(this.$props.userId,this.$props.campId)*/
        this.getLink(this.$props.userId,this.$props.campId)
    },
    methods:{
        getLink(userId,CampId){
            let status = ''
            const urlgetLink = `https://accestradeapi3.somee.com/api/Oder/LinkCamp`
            const ip = this.$store.getters.getIPAddr;
            axios.post(urlgetLink,{userId,CampId,IpAdds:ip}).then(result => {
                if (result.data.status === 1){
                    status = `Dang chuyen tiep ${result.data.message}`
                    //
                    window.location.href= status
                }else if (result.data.status === -1){
                    status = "IP da ton tai"
                    this.stt = -1

                }else {
                    status = 'Vui long thu lai ...'
                    this.stt = 2
                }
                console.log(result.data)
            })
        }
    }
}
</script>