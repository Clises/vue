<template>
  <nav>
    <div class="menu" @click="showSide">
      <span class="iconfont icon-menu">
      </span>
    </div>
    <router-link to="/my">my</router-link>
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
      },
    },
    components: {
      'slideBar': slideBar
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 99;
  }
  .icon-menu{
    font-size: .4rem;
  }
</style>
