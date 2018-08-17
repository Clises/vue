<template>
  <div id="home">
    <!--swiper-->
      <Swiper></Swiper>
    <!--推荐-->
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
    <!--推荐歌单-->
    <div class="songList"></div>
    <!--最新音乐-->
    <div class="newSong"></div>
  </div>
</template>
<script>
  import api from '../api/api'
  import Swiper from './swiper'
  import {mapGetters } from 'vuex'
  export default {
    name: 'Home',
    created() {
      this.getNewSongList();
    },
    data() {
      return {
        list: [],
      }
    },
    computed: {
      ...mapGetters([
        'reloads',
        'activeId'
      ]),
    },
    methods:{
      //页面刷新
      reload () {
        window.location.reload();
      },
      getNewSongList() {
        api.getNewSong().then((res) => {
          this.list=res.result;
        })
      }

    },
    components: {
      Swiper
    },
    mounted(){

      if(this.reloads){
        this.$store.commit('setReload',false);
        window.location.reload();
      }
    },
  }
</script>
<style lang="css"scoped>
  #home{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 15px 0 15px;
    }
  .recommend {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-around;
    text-align: center;

  }
 .recommend i {
    display: block;
    width: 70px;
    height: 70px;
    background: red;
    border-radius: 50%;
    margin:0 auto;
  }
  .recommend span{
    display: inline-block;
    margin-top: 10px;
  }
</style>
