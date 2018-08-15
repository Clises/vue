<template>
    <div id="app">
      <router-view/>
      <!--<player></player>-->
    </div>
</template>
<script>
  import player from '../src/components/player'
  export default {
        data() {
            return {}
        },
        methods: {},
        mounted() {
        },
        components:{
          player
        }
    }
</script>

<style scoped>
  @import 'assets/css/vant.css';
  #app{
  }

</style>
