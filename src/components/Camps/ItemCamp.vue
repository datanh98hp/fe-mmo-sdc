<template>
        <!-- Card Camps Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-header">
                    <div class="card-title" >
                        <p>Tên camp</p>
                    </div>
                </div>
                <div class="card-img">
                    <img alt="" src="./img.jpg" />
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
                            <div class="d-flex flex-row justify-content-lg-center">
                                <input type="text"  value="https://mmo2.com?u=1&camps=1" class="input-text" disabled />
                                <button class="btn btn-info ml-3" @click="copyURL(`https://mmo2.com?u=1&camps=1`)">Coppy</button>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4">
                        <div class="text-sm">
                            <button class="btn btn-block">Chi tiết:</button>
                        </div>
                        <!-- Button trigger modal -->
                        <button type="button" v-show="checkAdmin()" class="btn btn-primary" data-toggle="modal" data-target="#editModal">
                            Edit
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
                                    <h5 class="modal-title" id="exampleModalLabel">Cập nhật đơn camp</h5>
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
                                            <label for="exampleFormControlInput1">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Example select</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect2">Example multiple select</label>
                                            <select multiple class="form-control" id="exampleFormControlSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Example textarea</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
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
    computed:{

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
            const isAdmin = JSON.parse(user).isAdmin;
            if(isAdmin==1){return true}
            return false;
        }
    },

}
</script>
<style>
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