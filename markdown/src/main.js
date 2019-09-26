// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import $ from 'jquery'


// 使用ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)


//webpack 生成的这些
import router from './router'

Vue.config.productionTip = false



// 1.0 引用vuex
import Vuex from "vuex"
Vue.use(Vuex);

// 1.1 创建sotre
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // state 这里面的状态跟每个组件的数据属性有关系
    // 后端的数据保存在state中
    allList:[],  
    
    // 笔记data
    note:{
      title:"",
      content:"",
      markdown:"",
    }
 
  },
  mutations: {

    getAllDatas(state){
      $.ajax({
        url:'http://127.0.0.1:9527/api/v1/comments/',
        methods:"get",
        success:function(data){
          //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
          // _this.$store.state.allList = data;
          state.allList = data;
      
        }
      })
    },

    ADDONENOTE(state,newData){
      state.allList = newData  
    }
  },
  actions:{
    addOneNote(context,json){
      // action ajax操作
      $.ajax({
        url:"http://127.0.0.1:9527/api/v1/comments/",
        method:"post",
        data:json,
        success:function(data){

          // allList笔记列表,更新数据
          // state.allList = data  
          context.commit("ADDONENOTE",data)

        },
        error:function(err){
          console.log(err)
        }
      })

      
    }
  }


})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 1.3 引入store
  components: { App },
  template: '<App/>'
})
