<template>
  <div id="home">
    <Header></Header>
    <Swiper></Swiper>
    <!--<p>最新音乐</p>-->
<!--
    <div class="item">
      <div v-for="item in list" class="list">
        <img :src=item.song.album.picUrl alt="">
        <p>{{item.song.name}}</p>
        <p>{{item.song.artists[0].name}}</p>
      </div>
    </div>
-->
  </div>
</template>
<script>
  import api from '../api/api'
  import Header from './header'
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
      Header,Swiper
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
    padding: 10px;
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
