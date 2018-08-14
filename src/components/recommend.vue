<template>
    <div id="recommend">
      <div class="item">
        <div v-for="item in list" class="list">
          <img :src=item.song.album.picUrl alt="">
          <p>{{item.song.name}}</p>
          <p>{{item.song.artists[0].name}}</p>
        </div>
      </div>
    </div>
</template>
<script>
  import api from '../api/api'
  export default {
        created() {
          this.getNewSong();
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
          getNewSong() {
            api.getNewSong().then((res) => {
              this.list=res.result;
            })
          }

        },
        components: {},
        mounted() {

        }
    }
</script>

<style lang="scss" type="text/scss" scoped>

</style>
