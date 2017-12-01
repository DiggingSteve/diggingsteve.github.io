<template>
  <div id="container">
  <HeadCon :show="headFlag"/>
  <transition enter-active-class="animated fadeInUp">
    <middle v-if="middleFlag"/>
  </transition>
  <!--loading-->
  <transition leave-active-class="animated fadeOutDown">
    <Loading v-if="loadFlag"/>
  </transition>
  </div>
</template>

<script>
import animate from 'animate.css';
import Loading from './components/loading';
import HeadCon from './components/head';
import middle from './components/middle';
export default {
  name: "container",
  components: {
    Loading,
    HeadCon,
    middle
  },
  data:function(){
    return{
     loadFlag:true,
     headFlag:false,
     middleFlag:false
    }
  },
  created:function(){
    setTimeout(() => {
      this.loadFlag=false;
      this.headFlag=true;
    }, 1000);
    setTimeout(() => {
      this.middleFlag=true;
    }, 3000);
  }

};
</script>

<style>
*{padding: 0;margin: 0;box-sizing: border-box;color: #fff;text-align: center;vertical-align: middle; }
a{text-decoration:none !important;}
ul{list-style: none}
html{font-size: 10px;}
html,body{display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;overflow:hidden;}
#container {
  position: relative;
  top: 0;
  z-index: 999;
width: 100%;
height: 100%;
background-color: #dee1de;
background: url('./assets/155.jpg'  ) no-repeat;
background-size: 100%;
}
</style>
