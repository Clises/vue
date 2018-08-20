<template>
  <div id="swiper">
    <div class="swiper-containers">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data">
          <img :src="item.picUrl">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-paginations"></div>
    </div>
  </div>
</template>
<script>
  import {Swipe} from '../api/api'

  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      //这里调用api不能用Swiper会与swiper插件本身冲突
      Swipe().then((res) => {
        if (res.code == 200) {
          this.data = res.banners;
        }
      })
    },
    methods: {},
    components: {},
    mounted() {
      var swiper = new Swiper('.swiper-containers', {
        pagination: '.swiper-paginations',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,   //容器能够同时显示slides数量
        loopedSlides:1,
        // paginationClickable: true, //点击分页器控制Swiper切换
        grabCursor: true, //手掌形
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: false,//修改swiper的父元素时，自动初始化swiper
        // spaceBetween: 30,
        resistanceRatio: 0,
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false, //手指触发停止运动
        //过渡到另外一个slide触发
        onSlideChangeEnd: function (swiper) {
          swiper.update(); //每次加载完毕更新swiper
          swiper.startAutoplay();
          swiper.reLoop();  //重新对循环体进行个数计算
        }
      });
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  #swiper:before{
    content: "";
    width: 100%;
    height: 160px;
    background: red;
    position: absolute;
    left: 0;
    right: 0;
  }
  .swiper-containers {
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .swiper-paginations {
    position: absolute;
    z-index: 2;
    text-align: center;
  }
</style>
