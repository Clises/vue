<template>
  <div id="home">
    <!--swiper-->
      <Swiper></Swiper>
    <!--推荐-->
    <div class="recommend"></div>
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
   display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    }


  .item{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .list{
    width: 32%;
    height: 3rem;
    margin-top: .1rem;
  }
  img{
    width: 100%;
    border-radius:5px;
  }
</style>
