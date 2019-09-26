<template>
    <button class="btn" :class = "currentBtn" >
        <!-- 插槽  分发 -->
        <slot>按钮</slot>
        
    </button>
</template>


<script>
export default {
    name:"VnoteBtn",
    data(){
        return {

        }
    },
    props:{
        typed:String
    },
    computed:{
        currentBtn(){
            console.log(this.typed)
            return{
                "btn-success": this.typed == "success"? true:false,
                "btn-info": this.typed == "info"? true:false,
            }
        } 
    }

} 
</script>

<style scoped>


</style>

