<template>
  <div id="app">
    
    <!-- 2.3 使用Vheader组件 -->
    <Vheader></Vheader>
    
    <router-view/>  <!-- 路由切换 -->
  </div>
</template>

<script>
// 1.0 导入bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// 2.1 先引入vheader
import Vheader from "./components/Vheader"

// 3.0 引入jQuery
import $ from 'jquery'

export default {
    name: 'App',
    data(){
      return {
        // allList:[] 不会在data存储太多的数据
      }
    },

    // 2.2 挂载Vheader
    components:{
      Vheader
    },
    created(){

    },
    mounted(){
      
      // 原ajax位置
      this.$store.commit('getAllDatas')

    }
  }
</script>

<style>

</style>
