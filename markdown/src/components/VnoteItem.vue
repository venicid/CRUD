<template>
    <li >
        <h2>{{ data.title }}</h2>
        <p>{{ data.content }}</p>
        <!-- <el-button type="success" round>成功按钮</el-button> -->
        <VnoteBtn typed='info' >删除按钮</VnoteBtn>

    </li>

</template>

<script>
import VnoteBtn from "./VnoteBtn"
export default {
    name:"VnoteItem",
    data(){
        return{

        }
    },
    props:{
        // 验证
        data:Object
    },
    computed:{

    },
    methods:{
        // var id 

        // dispatch
    },
    components:{
        VnoteBtn
    }

}
</script>

<style scoped>

</style>
