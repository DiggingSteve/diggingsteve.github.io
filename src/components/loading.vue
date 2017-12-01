<template>
    <div  class="loading" >
        <div class="center" > 
               <Miao/><!--svg载入动画-->
        </div>
    </div>
    
</template>

<script>
import _ from "lodash";
import Miao from "./Miao";
import Vue from "vue";

// Load the core build.

export default {
  name: "loading",
  components: {
    Miao
  },
  data: function() {
    return {
      
    };
  },
  
  computed: {
 
  },
  watch: {
    // alertText: function() {
    //   console.log("及时反应");
    //   this.getAnswer();
    // }
  },
  methods: {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      () => {
        console.log("延迟");
      },
      // 这是我们为判定用户停止输入等待的毫秒数
      1000
    )
  },
  created: function() {
  
  }
};
</script>
<style scoped>
.loading {
  position: absolute;
  top: 0;
  background-color: rgba(255,255,255,0);
  width: 100%;
  height: 100%;
}
.hidden {
  display: none;
}
.center {
  position: absolute;
  z-index: 999;
  left: 50%;
  top: 50%;
  margin: -100px 0 0 -100px;
}
</style>
