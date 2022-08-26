<template>
    <div class="col-xl-3 col-md-6 mb-4">
        <div class="card  shadow h-100 py-2" :class="$props.theme">
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
                            {{ $props.name}}
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                            {{ $props.value}}
                        </div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-money-bill-alt fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'card-salary',
    props:['value','name','theme'],
    data(){
        return{
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    mounted() {

    }

}
</script>