<template>
    <div id="player">
      <aplayer autoplay :music="{
  url: 'http://devtest.qiniudn.com/Preparation.mp3',
}"
      >
      </aplayer>
      /
    </div>
</template>
<script>
  import Aplayer from 'vue-aplayer'
  export default {
        data() {
            return {}
        },
        methods: {},
        components: {
          Aplayer
        },
        mounted() {

        }
    }
</script>

<style lang="scss"scoped>

</style>
