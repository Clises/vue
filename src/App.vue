<template>
    <div id="app">
      <Header></Header>
      <router-view class="content"></router-view>
      <player class="footer"></player>
    </div>
</template>
<script>
  import Header from '../src/components/header'
  import player from '../src/components/player'
  export default {
        data() {
            return {}
        },
        methods: {},
        mounted() {
        },
        components:{
          Header,
          player
          // bottom
        }
    }
</script>

<style scoped>
  #app{
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .content{
    flex: 1 1 auto;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    overflow: auto;
  }
  .footer{
    width: 100%;
    flex: 0 0 auto;
    height: 75px;
  }
</style>
