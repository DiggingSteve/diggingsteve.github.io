<template >
  <div class="head">
     <transition enter-active-class="animated hinge">
      <div v-show="showFlag" class="menu">
       <span v-for="item in headMenu" v-on:click="active"  ><router-link  :to="item.router">{{item.name}}</router-link></span>
      </div>     
     </transition>
  </div>
  
</template>
<script >
import animate from "animate.css";
export default {
  name: "head",
  data: function() {
    return {
      showFlag: false,
      headMenu:[{router:"home",name:"Home"},{router:"about",name:"About"}],
      isActive:true
    };
  },
  props: ["show"],
  methods:{
    active:function(event){
      setTimeout(() => {
        event.target.classList.add("active");
      }, 200);
      
    }
  },
  watch: {
    show: function() {
      if (this.show == true) {
        setTimeout(() => {
          this.showFlag = true;
        }, 500);
      }
    }
  }
};


</script>

<style scoped>
.head {
  margin: 0 5px;
  padding: 5px 0;
  z-index: 999;
  font-size: 1.6rem;
}
.head .menu {
  background-color: rgba(255,255,255,.1);
  display: flex;
  justify-content: space-around;

  color: #fff;
  padding: 5px 0;
}
.head .menu span {
  
  cursor: pointer;
}
.head .menu span .active{
  color: #000;
}
.head .menu span a:hover {
  color: #000;
}
</style>

