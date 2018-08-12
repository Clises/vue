<template>
  <nav>
    <div class="test" @click="showSide">
      <span class="iconfont icon-menu" >
      </span>
    </div>
    <router-link to="/mine"><img :src="avatarUrl" alt="" class="user"></router-link>
    <router-link to="/my">my</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/search">search</router-link>
    <slideBar></slideBar>
  </nav>

</template>
<script>
  import {mapMutations, mapGetters,mapActions} from 'vuex'
  import slideBar from '@/components/sideBar'
   export default {
     data() {
       return {
         avatarUrl: '../../static/img/user.png',
         isShowMenu: this.showSide
       }
     },
     //计算属性
     computed: {
       //获取数据
       ...mapGetters([   //获取 getters
         'userData',
         'isShowMethod'
       ])
     },
     //监听,
     watch: {
       'userData': {
         //添加方法
         handler: 'changeData',   //绑定 handler方法
         deep: true  //发现对象内部值的变化
       }
     },
     methods: {
       changeData() {
         this.avatarUrl = this.userData.profile.avatarUrl
       },
       showSide(){
         this.$store.dispatch('showSideBar')
       },
       // ...mapMutations({
       //   showSide:'showBar'
       // })
     },
     components: {
       'slideBar':slideBar
     },
     //mounted 实时监听数据变换
     mounted(){
       //如果不是第一次同样进行设置
       if(!this.userData.first){
         this.avatarUrl=this.userData.profile.avatarUrl
       }
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
  .user{
    display: inline-block;
    width: 50px;
    height: 50px;
  }
</style>
