<template>
  <div class="home">
    <transition name="fade" @touchmove.stop.prevent>
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide"></div>
    </transition>
    <transition name="slide-fade">
      <div class="side-content" v-show="isRellyShow">
        <a class="change">
          <!--<img src="http://p4.qhimg.com/t0160e6a92121691e22.png" alt=""/>-->
        </a>

      </div>
    </transition>
  </div>

</template>
<script>
  import store from '../store/index.js';
  export default {
    data() {
      return {}
    },
    methods: {
      hideSide: function () {
        this.$store.dispatch('hideSideBar');
      },
      computed: {
        isRellyShow() {
          return this.$store.getters.isShowMethod;
        }

      },
      components: {},
      mounted() {

      },

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }

  .side-content {
    z-index: 11;
    position: fixed;
    width: 286px;
    height: 100%;
    background: #e5e5e5;
    top: 0;
    left: 0;
    bottom: 0;
    -webkit-overflow-scrolling: touch;
  }

  .fade-enter-to, .fade-leave-to {
    transition: opacity 0.3s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .slide-fade-enter-to, .slide-fade-leave-to {
    transition: transform 0.3s;
    transform: translate(0px, 0px);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    -webkit-transform: translate(-286px, 0px);
    transform: translate(-286px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
  }

  .change {
    display: block;
    width: 284px;
    height: 200px;
    background: url(http://p3.qhimg.com/t0134c65e59012a1257.png) no-repeat center;
    background-size: cover;
    border: 1px solid #fff;
    overflow: hidden;
  }

  .change img {
    display: block;
    width: 220px;
    height: 180px;
    opacity: 0;
    -webkit-transform: translate(284px, 200px);
    transform: translate(284px, 200px);
    -webkit-transition: opacity 0.5s ease-in-out 0.5s, -webkit-transform 1s ease-in-out;
    transition: opacity 0.5s ease-in-out 0.5s, transform 1s ease-in-out;
  }

  .change:hover img {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    opacity: 1;
  }
</style>
