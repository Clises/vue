<template>
  <div class="sideBar">
    <transition name="fade" @touchmove.stop.prevent>
      <div class="menu-mask" v-show="isRellyShow" @click="hideSide"></div>
    </transition>
    <transition name="slide-fade">
      <div class="side-content" v-show="isRellyShow">
        <div class="top">
          <img :src="avatarUrl" alt="" class="avatar">
          <span class="nickname">
          {{nickname}}
        </span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        avatarUrl: '../../static/img/user.png',
        nickname:''
      }
    },

    methods: {
      hideSide: function () {
        this.$store.dispatch('hideSideBar');
      },
    },
    computed: {
      ...mapGetters([   //获取 getters
        'userData',
      ]),
      isRellyShow() {
          return this.$store.getters.isShowMethod;
        },
    },
    watch: {
      'userData': {
        //添加方法
        handler: 'changeData',   //绑定 handler方法
        deep: true  //发现对象内部值的变化
      },
    },
    mounted(){
      //如果不是第一次加载
      if(!this.userData.first){
        this.avatarUrl=this.userData.profile.avatarUrl,
        this.nickname=this.userData.profile.nickname
      }
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
    width: 350px;
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
    -webkit-transform: translate(-350px, 0px);
    transform: translate(-350px, 0px);
    -webkit-transition: opacity 0.3s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
  }
  .top{
    width: 100%;
    height: 200px;
    background: black;
    padding: 20px;
  }
  .avatar{
    width: 75px;
    height: 75px;
    display: block;
    border-radius: 50%;
    background: red;
    margin-top: 50px;
  }
  .nickname{
    display: inline-block;
    color: white;
    margin-top: 10px;
  }
</style>
