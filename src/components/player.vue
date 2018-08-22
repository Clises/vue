<template>
  <div id="player">
    <!--播放-->
    <div class="player-control" :class="ishow ? '' : 'player-control__state'">
      <audio :src="'http://music.163.com/song/media/outer/url?id='+(play.id)+'.mp3'" controls="" autoplay=""
             preload="true" ref="player" @play="playerPlay" @timeupdate='playerTimeUpdate'></audio>
      <div class="player-info" @click="showDetails">
        <!--时间线-->
        <div class="timeLine" v-bind:style="{width:timeLine+'%'}"></div>
      </div>
      <!--控制-->
      <div class="player-bar">
        <div class="play" @click="playControl">
          <!--<img :src="playerIcon" alt="">-->
        </div>
        <div class="songsMenu" @click="showList">
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
        <!--header-->
        <div class="header">
          <div>
            <span @click="back">返回</span>
            <div class="music-info">
              <p class="name" v-text="songsInfo.name"></p>
              <p class="singer" v-text="songsInfo.ar[0].name"></p>
            </div>
          </div>
          <span class="share">分享</span>
        </div>

        <!--content-->
        <div class="content">
          <div class="musicShow">
            <div class="line">
            </div>
            <div class="pause" :class="isPlay ? '' : 'pause__state'">
            </div>
            <div class="details-background" :class="isPlay ? 'isRotate' : 'details-background__state'"
                 :style="topStyle">
            </div>
          </div>
          <div class="musicDo">
            <span class="like">喜欢</span>
            <span class="download">下载</span>
            <span class="comment">评论</span>
            <span class="do">更多信息</span>
          </div>
        </div>
        <!--detail-footer-->
        <div class="detail-footer">
          <div class="range">
            <span class="time" v-text="startTime">00:00</span>
            <van-slider v-model="value" @change="changeTime" class="slider"/>
            <span v-text="endTime"></span>
          </div>
          <div class="details-control">
            <span>循环</span>
            <span>上一首</span>
            <span @click="playControl" v-text="playState">
            </span>
            <span>下一首</span>
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
        timeLine: 0,
        value: 0,
        startTime: 0,
        endTime: 0,
        playState: '暂停',
        details: false,
        songsList: false,
        ishow: false,
        isPlay: true,
        topStyle: {
          backgroundImage: '',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
        }
      }
    },
    computed: {
      ...mapGetters([
        'songsInfo',
        'play',
        'songsUrl',
        'isPlaying'
      ]),
    },
    created() {
    },
    watch: {
      timeLine(n, o) {
        this.value = n;
      },
      isPlaying() {
        if (this.isPlaying == true) {
          this.ishow = true
        }
      }
    },

    mounted() {
      this.player = this.$refs.player;
      console.log(this.songsUrl)
      this.topStyle.backgroundImage = 'url(' + this.songsUrl + ')'
    },
    methods: {
      playerPlay() {
        this.topStyle.backgroundImage = 'url(' + this.songsUrl + ')'
      },
      showList() {
        this.songsList = !this.songsList;
      },
      playControl() {
        // this.$store.commit('play',false)
        if (this.player.paused) {
          this.player.play()
          this.playState = '暂停'
          this.isPlay = true;
        } else {
          this.player.pause()
          this.playState = '开始'
          this.isPlay = false;
        }
      },
      showDetails() {
        this.details = !this.details;
        var mo = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, false);//禁止页面滑动
      },
      playerTimeUpdate() {
        //当前的播放时间
        var currentTime = parseInt(this.player.currentTime);
        //持续时间
        var duration = parseInt(this.player.duration);
        var timeLine = (currentTime / duration) * 100;
        this.startTime = this.formatSeconds(currentTime);
        this.endTime = this.formatSeconds(duration);
        this.timeLine = timeLine;
      },
      changeTime() {
        var time = (this.value * this.player.duration) / 100;
        this.player.currentTime = time;
      },
      back() {
        this.details = !this.details;
        var mo = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mo, false);
      }
    }
  }
</script>

<style scoped>

  /*******************bottom**********************/
  /*control*/
  .player-control {
    width: 100%;
    height: 75px;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .player-control__state {
    display: none !important;
  }

  audio {
    display: none;
  }

  /*音乐信息*/
  .player-info {
    width: 70%;
    height: 100%;
    background: blue;
  }

  .timeLine {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 0.03rem;
    background: #f4ea2a;
  }
  .slider {
    width: 80%;
  }


  .player-bar {
    width: 30%;
    height: 100%;
    display: flex;
  }

  .songsMenu {
    width: 50%;
    height: 100%;
    background: black;
  }

  .play {
    width: 50%;
    height: 100%;
    background: white;
  }

  /*list需要优化*/
  .player-list-top {
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }

  .player-list-bottom {
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 1);
    position: fixed;
    left: 0;
    bottom: 75px;
  }

  /*******************details**********************/

  /*details*/
  .details {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    background: white;
    padding: 0 20px 0 20px;
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

  .songsList-enter, .songsList-leave-to {
    opacity: 0;
    /*top: -50%;*/
  }

  .songsList-enter-active {
    transition: all 0.5s ease 0.4s;
  }

  .songsList-leave-active {
    transition: all 0.5s
  }

  .songsList-enter-to, .songsList-leave {
    opacity: 1;
    /*top: 0%;*/
  }

  /*header*/
  .header {
    flex: 0 0 auto;
    display: flex;
    width: 100%;
    height: 75px;
    background-color: white;
    justify-content: space-between;
    position: relative;
    z-index: 99;
  }

  .music-info {
    display: inline-block;
  }

  .content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  /*******************musicShow**********************/
  .musicShow {
    width: 100%;
    height: 55vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .line {
    width: 80%;
    height: 5px;
    z-index: 11;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
  }

  .pause {
    flex: 1 1 auto;
    width: 140px;
    height: 210px;
    background-image: url("../assets/images/swith.png");
    background-size: cover;
    transform-origin: 14px 16px;
    transition: all 0.3s;
    position: absolute;
    top: -15px;
    z-index: 10;
    left: 50%;
  }
  .pause__state {
    transform: translate3d(-16px, 0, 0) rotateZ(-30deg);
  }

  .details-background {
    width: 37vh;
    height: 37vh;
    border-radius: 50%;
    background: black;
    align-self: center;
  }

  .details-background__state {
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
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  /*details footer*/
  .detail-footer {
    flex: 0 0 auto;
    height: 200px;
  }

  .range {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .details-control {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
