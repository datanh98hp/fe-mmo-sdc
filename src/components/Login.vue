<template>
  <div class="bg-gradient-primary">
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user" @submit="submit($event)">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user"
                                                aria-describedby="emaillHelp"
                                                v-model="username"
                                                placeholder="Enter user name...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                v-model="password"
                                                id="exampleInputPassword" placeholder="Password" autocomplete="">
                                        </div>
<!--                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>-->
                                        <button class="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>
                                        <hr>
                                        
                                    </form>
                                    <hr>
<!--                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>-->
                                    <div class="text-center">
                                        <router-link class="small" to="/register">Create an Account!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  </div>
</template>

<script>
export default {
    name:'login-form',
    data(){
      return {
        username:"",
        password:"",
      }
    },
    mounted(){

        let user = localStorage.getItem('user-inf')
         if(user){
             this.$router.push({name:'Home'})
         }
         ///
        ///refresh login
    /*    setInterval(()=>{
            localStorage.clear();
        },60000*30)*/
    }
  ,  
  methods:{
   async submit(e){
        e.preventDefault()

        //
            let result = await this.axios.post('http://accestradeapi3.somee.com/api/User/Login',{username:this.username,password:this.password});
           /* console.log(result.data)*/
           if(result.data.success){
               //save user-inf
               const userData = {
                   user:result.data.userName,
                   userId:result.data.userId,
                   isAdmin:result.data.is_Admin,
                   token:result.data.token_Key
               }

               //
               localStorage.setItem('user-inf',JSON.stringify(userData))

               this.$store.commit('updateUserData',userData)
               console.log("user from store: ",this.$store.state.user)
               this.$router.push({name:'Home'})
           }else{
                alert("Sai mật khẩu hoặc tài khoản...")
           }

        //
    },

  }
}
</script>

<style>

</style>