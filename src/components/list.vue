<template>
  <div id="list">
    <div class="back" @click="back">
      返回
    </div>
    <div v-for="(item,index) in list.playlist.tracks" class="list" :key="item.id" @click="setUrl(item.id)">
      {{item.name}}
    </div>
  </div>
</template>
<script>
  import api from '../api/api'
  import {mapMutations, mapGetters} from 'vuex'
  export default {
    created() {
      //我喜欢的音乐列表
      var that = this;
      var query = this.$route.query;
      api.mySong({
        id: query.id
      }).then((res) => {
        that.$store.commit('setList', res);
      })
    },
    data() {
      return {
        test:''
      }
    },
    computed: {
      ...mapGetters([
        'list',
        'songsInfo',
        'isPlaying'
      ]),
    },
    methods: {
      setUrl(id) {
        var that = this;
        this.$store.commit('setActiveId', id);
        api.musicUrl({
          id: id,
          br: '320000'
        }).then((res) => {
          if (res.code == 200) {
            that.$store.commit('setUrl', res.data[0])
            that.$store.commit('play',true)
            // console.log(this.isPlaying)
          }
        })
        api.songDetail({
          ids: id
        }).then(function (res) {
          if (res.code == 200) {
            that.$store.commit('setSongsInfo', res.songs[0])
          }
        })
        api.songAlbum({
          id: this.songsInfo.al.id
        }).then((res)=>{
          console.log(res.album.picUrl)
          that.$store.commit('setPicUrl', res.album.picUrl)
        })

      },

      back() {
        history.go(-1)
      }
    },
    components: {},
    mounted() {

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  #list {

  }

  .list {
    border: 1px solid red;
    height: 100px;
    line-height: 100px;
  }

  .back {
    font-size: 60px;
  }
</style>
