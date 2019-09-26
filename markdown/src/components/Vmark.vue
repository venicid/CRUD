<template>
	<div class='wrap'>
    请输入文字标题: <input type="text" name="" v-model="titleHandler">

    <button class="btn btn-success" @click="addOneNote">提交</button>

		<div class="mark">

			<textarea rows="10" cols="100" class='editor' v-model='markdownHandler' ></textarea>

			<div class='show' v-html='currentValue' ref="t"></div>
      
		</div>
	</div>
</template>

<script>

// 导入jQuery
import $ from "jquery"

import Marked from "marked";  
export default {
  name: "Vmark",
  data() {
    return {
      // markValue: ""
    };
  },
  methods: {
    // 添加1条笔记
    addOneNote(){

      var json = {
        title:this.titleHandler,  // 1.3 标题添加到json
        markdown:this.markdownHandler,
        content:this.$refs.t.innerText,

      }

      // 原ajax请求 post
      // 触发mutations方法，有局限性，只限于同步操作
      // this.$store.commit("addOneNote",json)

      //action方法
      this.$store.dispatch("addOneNote",json)

    }
  },
  computed: {
    // 1.0 监听标题
    titleHandler:{
      set:function(newValue){  // 1.2 设置标题的值，给store中的note
        console.log(newValue)
        this.$store.state.note.title = newValue
      },
      get:function(){         //1.1 获取标题的值
        return this.$store.state.note.title
      }
    },

    // 监听markdown
    markdownHandler:{
      set:function(newValue){  
        console.log(newValue)
        this.$store.state.note.markdown = newValue
      },
      get:function(){         
        return this.$store.state.note.markdown
      }
    },

    currentValue() {
      return Marked(this.$store.state.note.markdown);
    }
  }
};
</script>

<style>

.mark {
  width: 800px;
  height: 400px;
  margin: 0 auto;
}
.editor,.show {
  float: left;
  width: 395px;
  height: 400px;
  border: 1px solid #666;
}
</style>