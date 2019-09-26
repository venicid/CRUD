<template>
    <ul>
        <VnoteItem v-for="(item,index) in getAllDatas" :data="item"></VnoteItem>
    </ul>

</template>

<script>
    import VnoteItem from "./VnoteItem"
    export default {
        name:"VnoteList",
        data(){
            return{}
        },
        components:{
            VnoteItem,
        },
        computed:{
            // 监听
            getAllDatas(){
                return this.$store.state.allList;
        }
    }
    }
</script>

<style scoped>

</style>
