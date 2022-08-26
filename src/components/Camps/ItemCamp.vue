<template>
        <!-- Card Camps Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                    <div class="card-title" >
                        <p>{{$props.name}}</p>
                    </div>
                </div>
                <div class="card-img">
                    <img style="width: 70%" class="img-fluid" alt="" :src="this.$props.img || './img.jpg'"  />
                </div>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div
                                class="
                            text-xs
                            font-weight-bold
                            text-primary text-uppercase
                            mb-1
                          "
                            >
                                <h4>CPS</h4>
                            </div>

                            <div class="text-xs">
                                Danh mục: Tài chính
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                40,000 VND
                            </div>

                        </div>

                        <div class="col-auto">
                            <div class="justify-content-lg-center">
                                <input type="text" :value="$props.link" class="input-text" disabled />
                                <button class="btn btn-info ml-2" @click="copyURL(`${$props.link}`)">Coppy</button>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4">
<!--                        <div class="text-sm">
                            <button class="btn btn-light">Chi tiết</button>
                        </div>-->
                        <!-- Button trigger modal -->
                        <button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#editModal">
                            Chi tiết
                        </button>
                    </div>
                    <!-- Logout Modal-->
                    <div
                        class="modal fade"
                        id="editModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 v-show="checkAdmin()" class="modal-title" id="exampleModalLabel">Cập nhật đơn camp</h5>
                                    <h5 v-if="checkAdmin()==false" class="modal-title" id="exampleModalLabel">Chi tiết camps</h5>
                                    {{checkAdmin()}}
                                    <button
                                    v-show="checkAdmin()"
                                        class="close"
                                        type="button"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">
                                            Edit
                                        </span>
                                    </button>
                                    <button
                                        class="close"
                                        type="button"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Tên Camp</label>
                                            <h4 v-if="checkAdmin()==false">Ten camp demo</h4>
                                            <input v-if="checkAdmin()==true" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tên camp">
                                        </div>
                                        <div class="form-group">
                                            <label  for="exampleFormControlInput1">Liên kết: <a><span>http://</span></a></label>

                                            <input v-if="checkAdmin()==true" type="email" class="form-control" id="exampleFormControlInput1" placeholder="http://">
                                        </div>
                                        <div class="form-group">
                                            <label v-if="checkAdmin()==true" for="exampleFormControlSelect1">Loai san pham</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option selected>---Loai---</option>
                                                <option>Tai chinh</option>
                                                <option>Viễn thông</option>
                                                <option>Thương mại</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label v-if="checkAdmin()==true" for="exampleFormControlSelect1">Loại</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option selected>---Loai---</option>
                                                <option>CPS</option>
                                                <option>CPL</option>
                                                <option>CPQ</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Mô tả:</label>
                                            <textarea v-if="checkAdmin()==true" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <p v-if="checkAdmin()==false" class="form-control">Noi dung mo ta</p>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer" v-show="checkAdmin()">
                                    <button
                                        class="btn btn-secondary"
                                        type="button"
                                        data-dismiss="modal"
                                    >
                                        Hủy
                                    </button>
                                    <button data-dismiss="modal" class="btn btn-primary">Lưu</button>
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
    name: 'item-Camp',
    props:["name","type","link","typeProduct","linkProduct","description","img"],
    components:{

    },
   mounted(){
    // console.log(this.$store.state.user)
   },
    methods:{
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(mytext);
                alert('Đã sao chép');
            } catch($e) {
                alert('Cannot copy');
            }
        },
        checkAdmin(){
            const user = localStorage.getItem('user-inf')
            const isAdmin = JSON.parse(user).isAdmin
            if(isAdmin==1){return true}
            return false;
        }
    },

}
</script>
<style>
.card-img{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
    .card-img > img {
        width: 100%;
        border-radius: 1%;
    }
    .text-link {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
</style>