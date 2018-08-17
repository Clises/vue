<template>
  <div id="player">
    <div class="control" @click="showDetails">
    </div>
    <transition name="slide">
      <div class="details" v-if="details">
        <div class="header">
          <div>
            <span @click="back">返回</span>
            <div class="music">
              <p class="name">春夏秋冬</p>
              <p class="singer">张国荣</p>
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
            <div class="background">
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
            <span>暂停</span>
            <span>下一首</span>
            <span>播放列表</span>
          </div>
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
        details: false,
        list: []
      }
    },
    computed: {
      ...mapGetters([
        'songsInfo',
      ]),
    },

    mounted() {
      // console.log(this.$route.params);  /*获取动态路由传值*/
      // var aid=this.$route.params.aid;
      // 调用请求数据的方法
      // this.requestData(aid);
    },
    methods: {
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
      // requestData(aid){
      //   this.$http.get(api.playApi+aid).then((response)=>{
      //     this.list=response.data[0];
      //   },(err)=>{
      //     console.log(err)
      //   })
      // }
    }
  }
</script>

<style scoped>
  #player{
    flex: 0 0 auto;
    width: 100%;
    height: 1rem;
  }
  .control {
    width: 100%;
    height: 1rem;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
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

  .background {
    width: 43vh;
    height: 43vh;
    border-radius: 50%;
    background: black;
    margin: 100px auto;
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

  .footer {
    flex: 0 0 auto;
    height: 100px;
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

  /*.control {*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*height: 60px;*/
    /*align-items: center;*/
  /*}*/

</style>
