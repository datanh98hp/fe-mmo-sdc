<template>
    <div>
        <div v-if="stt==0">Dang chuyển hướng  .. . . . .</div>
        <div v-if="stt==-1">{{this.mess}}</div>
    </div>

</template>
<script>
import axios from "axios";


export default {
    name:'redirect-link',
    props:['userId','campId'],
    data(){
      return {
          stt:0,mess:''
      }
    },

    mounted() {
        this.$store.dispatch('getIpAction')
        /*window.location.href= this.getLink(this.$props.userId,this.$props.campId)*/
        this.getLink(this.$props.userId,this.$props.campId)
    },
    methods:{
        getLink(userId,CampId){
            this.$store.dispatch('getIpAction')
            const urlgetIp = `https://api.ipify.org`

            axios.get(urlgetIp).then(result=>{
                console.log("from getLink api   ",result.data)
                const ip = result.data

                const urlgetLink = `https://accestradeapi3.somee.com/api/Oder/LinkCamp`

                axios.post(urlgetLink,{userId,CampId,IpAdds:ip}).then(res => {
                    if (res.data.status === 1){
                        //
                        window.location.href= res.data.message

                    }else if (res.data.status === -1){
                        this.mess = 'Trùng IP ...'
                        this.stt = -1
                    }else {
                        this.mess = 'Có lỗi vui long thu lại cach khac ...'
                        this.stt = 2
                    }
                })

                //
            })


        }
    }
}
</script>