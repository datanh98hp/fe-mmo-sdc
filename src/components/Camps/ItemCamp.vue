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
                            <div class="text-link">
                                <input type="text" value="https://mmo2.com?u=1&camps=1" class="input" disabled />
                               <button class="btn btn-info">Coppy</button>
                            </div>

                        </div>

                        <div class="col-auto">

                        </div>

                    </div>
                    <div class="col mt-4">
                        <div class="text-xs">
                            <button class="btn btn-primary">Chi tiết:</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'item-Camp'
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