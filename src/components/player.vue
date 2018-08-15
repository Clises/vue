<template>
  <div id="player">
    <!--<audio :src="list.url" controls="controls"></audio>-->
    <div class="header">
      <div>
        <span>返回</span>
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
      <div class="control">
        <span>循环</span>
        <span>上一首</span>
        <span>暂停</span>
        <span>下一首</span>
        <span>播放列表</span>
      </div>
    </div>


  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
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
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #aaa;
    -webkit-overflow-scrolling:touch;
    transform:translate3d(0, 0, 0);
  }
  /*header*/
  .header{
    flex: 0 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
  }
  .music{
    display: inline-block;
  }
/*content*/
  .content{
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .line{
    width: 100%;
    height: 5px;
    background-image:linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.6), rgba(255,255,255,0));
  }
  .pause {
    flex: 1 1 auto;
    width:160px;
    height: 240px;
    background-image:url("../assets/images/swith.png");
    background-size: cover;
    transform-origin:14px 16px;
    transition:all 0.3s;
    z-index: 1;
    position: absolute;
    left: 50%;
    transform:translate3d(-16px, 0, 0) rotateZ(-35deg);
  }
  .background{
    width: 43vh;
    height: 43vh;
    border-radius: 50%;
    background: black;
    margin: 100px auto;
    animation:goRotate 16s linear infinite 0.1s;

  }
  @keyframes goRotate{
    0%{
      transform: rotate(0)
    }
    50%{
      transform: rotate(180deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }
  .musicDo{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  /*footer*/
  .footer{
    flex: 0 0 auto;
    height: 100px;
  }
  .range{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }
  .time{
  color: red;
    margin-right: 15px;
  }
  .duration{
    position: relative;
    flex: 1 1 auto;
    height:2px;
    border-radius:1px;
    background:rgba(244,244,244,0.3);
    cursor:pointer;
    font-size:0;
  }
  .bar{
    position: absolute;
    width: 20px;
    height: 20px;
    background:#fff;
    border-radius: 50%;
    display: inline-block;
    margin-top: -8px;
    left:calc(40%)
  }
  .control{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }


</style>
