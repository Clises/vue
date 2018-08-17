<template>
  <nav>
    <div class="menu" @click="showSide">
      <span class="iconfont icon-menu">
      </span>
    </div>
    <router-link to="/mine">mine</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/search">search</router-link>
    <slideBar></slideBar>
  </nav>

</template>
<script>
  import slideBar from '@/components/sideBar'

  export default {
    data() {
      return {}
    },
    methods: {
      showSide() {
        this.$store.dispatch('showSideBar')
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },
    },
    components: {
      slideBar
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    flex: 0 0 auto;
    width: 100%;
    height: 75px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 96;
  }
  .icon-menu{
    font-size: .4rem;
  }
</style>
