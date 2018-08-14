<template>
  <div class="swiper">
    <div class="swiper-bg"></div>
    <div class="swiper-containers">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data">
          <img :src="item.picUrl">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-paginations"></div>
    </div>
    <div class="recommend">
      <div class="type">
        <i></i>
        <span>私人FM</span>
      </div>
      <div class="type">
        <i></i>
        <span>每日推荐</span>
      </div>
      <div class="type">
        <i></i>
        <span>歌单</span>
      </div>
      <div class="type">
        <i></i>
        <span>排行榜</span>
      </div>
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
        slidesPerView: 1,
        paginationClickable: true,
        grabCursor: true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: false,//修改swiper的父元素时，自动初始化swiper
        // spaceBetween: 30,
        resistanceRatio: 0,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        onSlideChangeEnd: function (swiper) {
          swiper.update();
          swiper.startAutoplay();
          swiper.reLoop();
        }
      });
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .swiper-bg {
    width: 100%;
    height: 160px;
    background: red;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
  }
  .swiper {
    width: 100%;
    text-align: center;
    margin-top: 75px;
  }
  .swiper-containers {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .swiper-wrapper,
  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .swiper-paginations {
    position: absolute;
    z-index: 2;
  }

  .recommend {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-around;
  }
  i {
    display: block;
    width: 70px;
    height: 70px;
    background: red;
    border-radius: 50%;
    margin:0 auto;
  }
  span{
    display: inline-block;
    margin-top: 10px;
  }
</style>
