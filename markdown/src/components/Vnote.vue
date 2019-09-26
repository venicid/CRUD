<template>

    <div class="container">
        <div class="row">
            <div class="col-md-3">

                <div class="panel panel-default">
                    <div class="panel-heading">我的笔记列表</div>
                    <div class="panel-body">

                        <!-- 笔记列表 -->
                        <VnoteShow></VnoteShow>

                    </div>
                </div>

            </div>

            <div class="col-md-9">
                <div class="panel panel-default">

                    <div class="panel-heading">
                        
                    </div>

                    <div class="panel-body">

                        <!-- markdown -->
                        <Vmark></Vmark>
                        
                    </div>
                    
                </div>

            </div>

        </div>
    </div>


</template>

<script>
// 1导入
import Vmark from "./Vmark"
import VnoteShow from "./VnoteShow"

export default {
    name:"Vnote",
    data(){
        return{
            // // 自定义的数据
            // noteList:[
            //     {id:1,title:"day1 vue学习",content:"vue初认识"},
            //     {id:2,title:"day2 vue进阶",content:"vue全家桶"},
            // ]
        }
    },
    components:{
        // 2挂载
        Vmark,
        VnoteShow,
    }
}
</script>

<style scoped>

</style>
