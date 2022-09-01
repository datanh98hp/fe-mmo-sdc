<template>
        <!-- Card Camps Example -->
        <div class="col-xl-3 col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100">
                <div class="card-header">
                    <div class="card-title" >
                        <p>{{$props.name}}</p>
                    </div>
                </div>

                <div class="card-body text-xl-center">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-center">
<!--                                <p>{{$props.id}}</p>-->
                            </div>
                            <div class="card-img">
                                <img class="img-fluid" alt="" :src="$props.img || './img.jpg'"  />
                            </div>
                            <div
                                class="
                            text-xs
                            font-weight-bold
                            text-primary text-uppercase
                            mb-1
                          "
                            >
                                <h4>{{$props.type}}</h4>
                            </div>

                            <div class="text-xs">
                                Danh mục: Tài chính
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                {{ $props.price }} VND
                            </div>

                        </div>
                        <div class="col-auto">

                        </div>
                    </div>
                    <div class="link--group text-xl-center">
                        <input type="text" :value="$props.link" class="input-text" disabled />
                        <button class="btn btn-info ml-2" @click="copyURL(`${$props.link}`)">Coppy</button>
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
                    <!-- detail Modal-->
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
                                    <h5 v-show="checkAdmin()==true" class="modal-title" id="exampleModalLabel">Cập nhật đơn camp</h5>
                                    <h5 v-if="checkAdmin()==false" class="modal-title" id="exampleModalLabel">Chi tiết camps</h5>
<!--                                    {{checkAdmin()}}-->
                                    <button
                                    v-show="checkAdmin()"
                                        class="close"
                                        type="button"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">
                                            <router-link to="{{`/camp/{{${$props.id}}`}}">Edit</router-link>
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
                                            <img class="img-fluid" alt="" :src="$props.img" style="width: 250px; height: 100%" />
                                        </div>
                                        <div class="form-group">
                                            <label v-if="checkAdmin()==false" for="exampleFormControlInput1">{{$props.name}}</label>
                                            <h4 v-if="checkAdmin()==false">{{$props.name}}</h4>
                                            <input v-if="checkAdmin()==true" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tên camp">
                                        </div>
                                        <div class="form-group">
                                            <label v-show="checkAdmin()==false" for="exampleFormControlInput1">Liên kết: <a><span>{{$props.link}}</span></a></label>
                                            <input v-if="checkAdmin()==true" type="text" class="form-control" id="exampleFormControlInput1" :value="$props.link" disabled>
                                        </div>
                                        <div class="form-group">
                                            <label v-show="checkAdmin()==false" for="exampleFormControlSelect1">Loai san pham : <span><b>{{$props.type}}</b></span></label>
                                            <select v-show="checkAdmin()==true" class="form-control" id="exampleFormControlSelect1" :value="$props.type">
                                                <option selected>---Loai---</option>
                                                <option value="CPS">CPS</option>
                                                <option value="CPL">CPL</option>
                                                <option value="CPQL">CPQL</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label v-if="checkAdmin()==true" for="exampleFormControlSelect1">Loại</label>
                                            <select class="form-control" v-show="checkAdmin()==true" id="exampleFormControlSelect1">
                                                <option selected>---Loai---</option>
                                                <option>Tai chinh</option>
                                                <option>Viễn thông</option>
                                                <option>Thương mại</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Mô tả:</label>
                                            <ckeditor  v-show="checkAdmin()==true" :editor="editor"  class="form-control" id="exampleFormControlTextarea1" rows="3"></ckeditor>
                                            <p v-show="checkAdmin()==false" class="form-control">{{$props.description}}</p>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'item-Camp',
    props:["name","type","link","typeProduct","linkProduct","description","img"],
    components:{

    },
    data(){
        return {
            editor:ClassicEditor,
        }
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
            const isAdmin = this.$store.getters.getUserRole
            if(isAdmin==1){return true}
            return false;
        }
    },

}
</script>
<style>
.card-img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
}
    .card-img img {
        width: 200px;
        height: 160px;
    }
    .link--group {

    }

    .text-link {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
</style>