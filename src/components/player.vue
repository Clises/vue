<template>
  <div id="player">
    <div class="playr-control">

      <audio :src="play.url" controls=""  autoplay=""  preload="true" ref="player" @play="playerPlay"></audio>
      <div class="player-info"@click="showDetails">

      </div>
      <div class="player-bar">
        <div class="songsMenu" @click="showList">
        </div>
        <div class="play" @click="playControl">
        </div>
        <div class="next">
        </div>
      </div>
    </div>
    <!--播放列表-->
    <transition name="songsList">
      <div class="player-list-top" v-if="songsList" @click="showList">
        <div class="player-list-bottom" v-if="songsList">
        </div>
      </div>
    </transition>
    <!--详情页面-->
    <transition name="slide">
      <div class="details" v-if="details">
        <div class="header">
          <div>
            <span @click="back">返回</span>
            <div class="music">
              <p class="name" v-text="songsInfo.name"></p>
              <p class="singer" v-text="songsInfo.ar[0].name"></p>
            </div>
          </div>
          <span class="share">分享</span>
        </div>
        <div class="content">
          <div class="musicShow">
            <div class="line">
            </div>
            <div class="pause">
            </div>
            <div class="details-background" :style="topStyle">
              背景
            </div>
          </div>
          <div class="musicDo">
            <span class="like">喜欢</span>
            <span class="download">下载</span>
            <span class="comment">评论</span>
            <span class="do">更多信息</span>
          </div>
        </div>
        <div class="footer">
          <div class="range">
            <span class="time">00:00</span>
            <div class="duration">
              <span class="progress"></span>
              <span class="bar"></span>
            </div>
          </div>
          <div class="details-control">
            <span>循环</span>
            <span>上一首</span>
            <span @click="playControl">暂停</span>
            <span @click="nextPlay">下一首</span>
            <span>播放列表</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import api from '../api/api'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        isActive:true,
        details: false,
        // list: [],
        songsList:false,
        topStyle:{
          backgroundImage: '',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center center"
        }
      }
    },
    computed: {
      ...mapGetters([
        'songsInfo',
        'play',
        'songsUrl'
      ]),
    },
    created() {
    },

    mounted() {
      api.songAlbum({
        id:this.songsInfo.ar.id
      }).then((res)=>{

        console.log(res)
      })

      this.player=this.$refs.player;
      this.topStyle.backgroundImage='url('+this.songsInfo.al.picUrl+')'
      // this.play.isActive=true;
    },
    methods: {

      playerPlay(){
        this.playerIcon='../../static/img/pause.png';
        this.topStyle.backgroundImage='url('+this.songsUrl+')'
      },

      showList(){
        this.songsList=!this.songsList;
      },
      playControl(){
        if (this.player.paused){
          this.player.play()
        }else
          {
            this.isActive=false;
            this.player.pause()
        }
      },
      showDetails() {
        this.details = !this.details;
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
      },

      back() {
        this.details = !this.details;
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
      }
    }
  }
</script>

<style scoped>
  audio{
    display: none;
  }
  .playr-control {
    width: 100%;
    height: 1rem;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .player-info{
    width: 60%;
    height: 100%;
    background: blue;
  }
  .player-bar{
    width: 40%;
    height: 100%;
    background: red;
    display: flex;
    justify-content: space-between;
  }
  .songsMenu{
    width: 70px;
    height: 100%;
    background: black;
  }
  .play{
    width: 70px;
    height: 100%;
    background: white;
  }
  .next{
    width: 70px;
    height: 100%;
    background: yellow;
  }
  .player-list-top{
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
  .player-list-bottom{
    width: 100%;
    height: 42%;
    background: rgba(0, 0, 0, 1);
    position: fixed;
    left: 0;
    top: 50%;
    /*z-index: 99;*/
    /*color: #f4ea2a;*/
  }

  #player{
    flex: 0 0 auto;
    width: 100%;
    height: 1rem;
  }
  .details {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 98;
    background: white;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    top: 100%;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
  }

  .slide-enter-to, .slide-leave {
    opacity: 1;
    top: 0;
  }

  .songsList-enter,.songsList-leave-to{
    opacity: 0;
     /*top: -50%;*/
  }
  .songsList-enter-active{
    transition: all 0.5s ease 0.4s;
  }
  .songsList-leave-active{
    transition: all 0.5s
  }
  .songsList-enter-to,.songsList-leave{
    opacity: 1;
     /*top: 0%;*/
  }

  .header {
    flex: 0 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
  }

  .music {
    display: inline-block;
  }

  .content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    width: 100%;
    height: 5px;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
  }

  .pause {
    flex: 1 1 auto;
    width: 160px;
    height: 240px;
    background-image: url("../assets/images/swith.png");
    background-size: cover;
    transform-origin: 14px 16px;
    transition: all 0.3s;
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translate3d(-16px, 0, 0) rotateZ(-35deg);
  }

  .details-background {
    width: 43vh;
    height: 43vh;
    border-radius: 50%;
    background: black;
    margin: 100px auto;
    /*animation: goRotate 16s linear infinite 0.1s;*/
  }

  .active{
    animation: goRotate 16s linear infinite 0.1s;
  }

  @keyframes goRotate {
    0% {
      transform: rotate(0)
    }
    50% {
      transform: rotate(180deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .musicDo {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }






  /*details footer*/
  .footer {
    flex: 0 0 auto;
    height: 100px;
    background: red;
  }

  .range {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .time {
    color: red;
    margin-right: 15px;
  }

  .duration {
    position: relative;
    flex: 1 1 auto;
    height: 2px;
    border-radius: 1px;
    background: rgba(244, 244, 244, 0.3);
    cursor: pointer;
    font-size: 0;
  }

  .bar {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-top: -8px;
    left: calc(40%)
  }
  .details-control{
    display: flex;
    justify-content: space-around;
  }
</style>
