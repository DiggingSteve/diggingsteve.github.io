<template>
  <div class="middle">
    <transition  enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight"
       mode="out-in"        >
<router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div class="topic">
      <div class="card">
          <div class="logo">
            <img src="../assets/logo.jpg">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import animate from "animate.css";
export default {
  name: "middle"
};
</script>
<style >
.middle {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 5px;
}
.middle-con {
  background-color: rgba(255, 255, 255, 0.1);
  width: 80%;
}

.topic {
  position: relative;
  width: 20%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 5px;
}

.card {
  width: 65%;
  height: 450px;
  margin: auto;
  position: absolute;
  top: 20px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  background-color: #fff;
  border-radius: 5px;
  animation: egg 4s ;
  -moz-animation: egg 4s; /* Firefox */
  -webkit-animation: egg 4s; /* Safari 和 Chrome */
  -o-animation: egg 4s;
  overflow: hidden;
}

@keyframes egg
{
0%   {opacity: 0;width: 50px;height: 50px;background: yellow;border-radius: 50%;}
30%{opacity: 0;width: 50px;height: 50px;background: #ecef07;border-radius: 50%;}
40%   {opacity: 1;width: 50px;height: 50px;background: #ecef07;border-radius: 50%;}
44%  {width: 50px;height: 50px;background: #efc807;border-radius: 50%;transform:translate(0,25px) }
48%  {width: 50px;height: 50px;background: #ed940d;border-radius: 50%;transform:translate(0,-5px) }
52%  {width: 50px;height: 50px;background: #ed890d;border-radius: 50%;transform:translate(0,30px) }
56%  {width: 50px;height: 50px;background: #ed740d;border-radius: 50%;transform:translate(0,-5px) }
60%  {width: 50px;height: 50px;background: #ed550d;border-radius: 50%;transform:translate(0,45px) }
64%  {width: 50px;height: 50px;background: #ed410d;border-radius: 50%;transform:translate(0,-5px) }
68%  {width: 50px;height: 50px;background: #ed2c0d;border-radius: 50%;transform:translate(0,55px) }
72%  {width: 50px;height: 50px;background: #ed2c0d;border-radius: 50%;transform:translate(0,-5px) }
76%  {width: 50px;height: 50px;background: #ed2c0d;border-radius: 50%;transform:translate(0,300px) }

100% {background: #fff;}
}

@keyframes logoEgg {
  0%{opacity: 0}
  80%{opacity: 0}
  100%{opacity: 1}
}

.logo {
  padding: 2px;
}
.logo img {
  border: 1px solid transparent;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  box-shadow: #000 0px 0px 8px;
  animation: logoEgg 4s    ;
}
@media (max-width: 767px) {
  .logo img {
    width: 3rem;
    height: 3rem;
  }
  .title .head ul li {
    font-size: 0.6rem;
  }
}
</style>


